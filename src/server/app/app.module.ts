import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as connectionOptions from "../ormconfigMongo";
import { ProjectsModule } from "../projects/projects.module";
import { ContactsModule } from "../contacts/contacts.module";
import { AdminModule } from "@admin-bro/nestjs";

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
                resources: [],
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
