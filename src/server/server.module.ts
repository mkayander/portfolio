import { Module } from "@nestjs/common";
import { AppModule } from "./app/app.module";
import { ViewModule } from "./view/view.module";
import { ProjectsModule } from "./projects/projects.module";

@Module({
    imports: [AppModule, ViewModule, ProjectsModule],
})
export class ServerModule {}
