import { Module, UnauthorizedException } from "@nestjs/common";
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
import { User } from "../users/entities/user.entity";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";
import { AuthService } from "../auth/auth.service";
import { InfoSectionsModule } from "../info-sections/info-sections.module";
import { InfoSection } from "../info-sections/entities/info-section.entity";

AdminBro.registerAdapter(AdminBroTypeOrm);

AdminBro.registerAdapter({ Database, Resource });

const projectResourceOptions = {
    properties: {
        description: {
            type: "richtext",
            custom: {
                // some custom options
            },
        },
    },
};

const sectionResourceOptions = {
    properties: {
        content: {
            type: "richtext",
            custom: {
                // some custom options
            },
        },
    },
};

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({ ...connectionOptions, autoLoadEntities: true }),
        MongooseModule.forRoot(`mongodb://${process.env.MONGODB_HOSTNAME || "localhost"}/?authSource=admin`, {
            dbName: process.env.MONGODB_DATABASE || "portfolio",
            user: process.env.MONGODB_USER,
            pass: process.env.MONGODB_PASSWORD,
            useFindAndModify: false,
        }),
        ProjectsModule,
        ContactsModule,
        UsersModule,
        AuthModule,
        InfoSectionsModule,
        AdminModule.createAdminAsync({
            imports: [ProjectsModule, AuthModule],
            inject: [getModelToken("Project"), AuthService],
            useFactory: (projectModel: Model<Project>, authService: AuthService): AdminModuleOptions => ({
                adminJsOptions: {
                    rootPath: "/admin",
                    resources: [
                        {
                            resource: projectModel,
                            options: projectResourceOptions,
                        },
                        {
                            resource: InfoSection,
                            options: sectionResourceOptions,
                        },
                        Contact,
                        User,
                    ],
                },
                auth: {
                    authenticate: async (email, password) => {
                        console.log("Authenticating in admin panel...", email);
                        const user = await authService.validateUser(email, password);
                        console.log("User: ", user);
                        if (user === null) throw new UnauthorizedException();
                        return { email: user.email, id: user.id.toString() };
                    },
                    cookieName: "test",
                    cookiePassword: "testPass",
                },
            }),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
