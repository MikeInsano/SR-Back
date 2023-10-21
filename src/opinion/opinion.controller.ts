// opinion.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OpinionService } from './opinion.service';
import { CreateOpinionDto } from './DTO/create-opinion.dto'
import { UpdateOpinionDto } from './DTO/update-opinion.dto'

@Controller('opiniones')
export class OpinionController {
  constructor(private readonly opinionService: OpinionService) { }

  @Get()
  async getAllOpinions() {
    return this.opinionService.getAllOpinions();
  }

  @Get(':id')
  async getOpinionById(@Param('id') id: number) {
    return this.opinionService.getOpinionById(id);
  }

  @Post()
  async create(@Body() CreateOpinionDto: CreateOpinionDto) {
    try {
      const createdOpinion = await this.opinionService.createOpinion(CreateOpinionDto);
      return createdOpinion;
    } catch (error) {
      console.error('Error al guardar el comentario', error);
      throw new Error('Error al guardar el comentario');
    }
  }

  @Put(':id')
  async updateOpinion(@Param('id') id: number, @Body() updatedOpinion: UpdateOpinionDto) {
    return this.opinionService.updateOpinion(id, updatedOpinion);
  }

  @Delete(':id')
  async deleteOpinion(@Param('id') id: number): Promise<void> {
    await this.opinionService.deleteOpinion(id);
  }
}