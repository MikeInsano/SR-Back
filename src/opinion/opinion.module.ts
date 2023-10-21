import { Module } from '@nestjs/common';
import { OpinionController } from './opinion.controller'
import { OpinionService } from './opinion.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Opiniones } from './opinion.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Opiniones])],
    controllers: [OpinionController],
    providers: [OpinionService]
})
export class OpinionModule {}