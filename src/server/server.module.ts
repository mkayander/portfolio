import { Module } from "@nestjs/common";
import { AppModule } from "./app/app.module";
import { ViewModule } from "./view/view.module";
import { RouterModule } from "@nestjs/core";
import { ProjectsModule } from "./projects/projects.module";
import { ContactsModule } from "./contacts/contacts.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { StaticModule } from "./static/static.module";

@Module({
    imports: [
        AppModule,
        RouterModule.register([
            {
                path: "api/v1",
                module: AppModule,
                children: [
                    {
                        path: "/",
                        module: UsersModule,
                    },
                    {
                        path: "/",
                        module: ProjectsModule,
                    },
                    {
                        path: "/",
                        module: ContactsModule,
                    },
                    {
                        path: "/",
                        module: AuthModule,
                    },
                ],
            },
        ]),
        ViewModule,
        StaticModule,
    ],
})
export class ServerModule {}
