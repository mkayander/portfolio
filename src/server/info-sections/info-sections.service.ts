import { Injectable } from '@nestjs/common';
import { CreateInfoSectionDto } from './dto/create-info-section.dto';
import { UpdateInfoSectionDto } from './dto/update-info-section.dto';

@Injectable()
export class InfoSectionsService {
  create(createInfoSectionDto: CreateInfoSectionDto) {
    return 'This action adds a new infoSection';
  }

  findAll() {
    return `This action returns all infoSections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} infoSection`;
  }

  update(id: number, updateInfoSectionDto: UpdateInfoSectionDto) {
    return `This action updates a #${id} infoSection`;
  }

  remove(id: number) {
    return `This action removes a #${id} infoSection`;
  }
}
