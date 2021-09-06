import { Module } from "@nestjs/common";
import { InfoSectionsService } from "./info-sections.service";
import { InfoSectionsController } from "./info-sections.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoSection } from "./entities/info-section.entity";

@Module({
    imports: [TypeOrmModule.forFeature([InfoSection])],
    controllers: [InfoSectionsController],
    providers: [InfoSectionsService],
})
export class InfoSectionsModule {}
