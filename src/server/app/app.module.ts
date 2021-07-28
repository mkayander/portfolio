import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as connectionOptions from "../ormconfigMySQL";
import { ProjectsModule } from "../projects/projects.module";
import { ContactsModule } from "../contacts/contacts.module";
import AdminBro from "admin-bro";
import { Database, Resource } from "@admin-bro/typeorm";
import { AdminModule } from "../admin";
import { Project } from "../projects/entities/project.entity";
import { Contact } from "../contacts/entities/contact.entity";

AdminBro.registerAdapter({ Database, Resource });

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({ ...connectionOptions, autoLoadEntities: true }),
        ProjectsModule,
        ContactsModule,
        AdminModule.createAdmin({
            adminBroOptions: {
                rootPath: "/admin",
                resources: [Project, Contact],
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
