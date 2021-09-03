import { Module } from "@nestjs/common";
import { AppModule } from "./app/app.module";
import { ViewModule } from "./view/view.module";
import { RouterModule } from "@nestjs/core";
import { ProjectsModule } from "./projects/projects.module";
import { ContactsModule } from "./contacts/contacts.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { InfoSectionsModule } from "./info-sections/info-sections.module";

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
                        module: InfoSectionsModule,
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
    ],
})
export class ServerModule {}
