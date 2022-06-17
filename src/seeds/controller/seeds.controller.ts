import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';

import { SeedsService } from '../services/seeds.service';
import { CreateSeedDto, UpdateSeedDto } from '../dtos/seed.dto';

@Controller('seeds')
export class SeedsController {
    constructor(private seedService: SeedsService) {}

    @Get()
    getSeeds(){
        return this.seedService.findAll();
    }

    @Get(':seedId')
    getOneSeedId(@Param('seedId') seedId:string) {
        return this.seedService.findOneId(seedId);
    }

    @Post()
    create(@Body() payload: CreateSeedDto) {
        return this.seedService.create(payload);
    }

    @Put(':seedId')
    update(@Param('seedId') seedId:string, @Body() payload:UpdateSeedDto) {
        return this.seedService.update(seedId, payload);
    }

    @Delete(':seedId')
    delete(@Param('seedId') seedId:string) {
        return this.seedService.delete(seedId);
    }
}
