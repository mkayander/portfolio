import { Module } from '@nestjs/common';
import { InfoSectionsService } from './info-sections.service';
import { InfoSectionsController } from './info-sections.controller';

@Module({
  controllers: [InfoSectionsController],
  providers: [InfoSectionsService]
})
export class InfoSectionsModule {}
