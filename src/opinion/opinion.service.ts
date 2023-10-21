// opinion.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOpinionDto } from './DTO/create-opinion.dto';
import { Opiniones } from './opinion.entity';
import { UpdateOpinionDto } from './DTO/update-opinion.dto'

@Injectable()
export class OpinionService {
    constructor(@InjectRepository(Opiniones) private readonly opinionRepository: Repository<Opiniones>) { }

    async getAllOpinions(): Promise<Opiniones[]> {
        return this.opinionRepository.find();
    }

    async getOpinionById(id: number): Promise<Opiniones> {
        return this.opinionRepository.findOne({
            where: {
                id: id,
            },
        });
    }

    async createOpinion(createOpinionDto: CreateOpinionDto): Promise<Opiniones> {
        const newOpinion: Opiniones = this.opinionRepository.create(createOpinionDto);
        return this.opinionRepository.save(newOpinion);
    }

    async updateOpinion(id: number, updatedOpinion: UpdateOpinionDto): Promise<Opiniones> {
        // Obtén el comentario actual desde la base de datos
        const opinionToUpdate = await this.opinionRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!opinionToUpdate) {
            throw new NotFoundException('Comentario no encontrado');
        }

        // Actualiza el comentario con el nuevo texto
        opinionToUpdate.comentario = updatedOpinion.comentario;

        // Guarda los cambios en la base de datos
        return this.opinionRepository.save(opinionToUpdate);
    }

    async deleteOpinion(id: number): Promise<void> {
        const deleteResult = await this.opinionRepository.delete(id);
        if (deleteResult.affected === 0) {
            throw new NotFoundException('Opinion not found');
        }
    }
} 