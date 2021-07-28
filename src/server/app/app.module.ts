import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as connectionOptions from "../ormconfigMySQL";
import { ProjectsModule } from "../projects/projects.module";
import { ContactsModule } from "../contacts/contacts.module";
import AdminBro from "adminjs";
import * as AdminBroTypeOrm from "@adminjs/typeorm";
import { getModelToken, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Project } from "../projects/schemas/project.schema";
import { Database, Resource } from "@adminjs/mongoose";
import { Contact } from "../contacts/entities/contact.entity";
import { AdminModule, AdminModuleOptions } from "@adminjs/nestjs";

AdminBro.registerAdapter(AdminBroTypeOrm);

AdminBro.registerAdapter({ Database, Resource });

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({ ...connectionOptions, autoLoadEntities: true }),
        MongooseModule.forRoot("mongodb://localhost/portfolio"),
        ProjectsModule,
        ContactsModule,
        AdminModule.createAdminAsync({
            imports: [ProjectsModule],
            inject: [getModelToken("Project")],
            useFactory: (projectModel: Model<Project>): AdminModuleOptions => ({
                adminJsOptions: {
                    rootPath: "/admin",
                    resources: [{ resource: projectModel }, Contact],
                },
            }),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
