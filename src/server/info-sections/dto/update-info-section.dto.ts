import { PartialType } from '@nestjs/mapped-types';
import { CreateInfoSectionDto } from './create-info-section.dto';

export class UpdateInfoSectionDto extends PartialType(CreateInfoSectionDto) {}
