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

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({ ...connectionOptions, autoLoadEntities: true }),
        MongooseModule.forRoot(`mongodb://${process.env.MONGODB_HOSTNAME || "localhost"}/portfolio?authSource=admin`, {
            user: process.env.MONGODB_USER,
            pass: process.env.MONGODB_PASSWORD,
        }),
        ProjectsModule,
        ContactsModule,
        UsersModule,
        AuthModule,
        AdminModule.createAdminAsync({
            imports: [ProjectsModule, AuthModule],
            inject: [getModelToken("Project"), AuthService],
            useFactory: (projectModel: Model<Project>, authService: AuthService): AdminModuleOptions => ({
                adminJsOptions: {
                    rootPath: "/admin",
                    resources: [{ resource: projectModel, options: projectResourceOptions }, Contact, User],
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
