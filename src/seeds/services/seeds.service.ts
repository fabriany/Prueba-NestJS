import { Injectable, NotFoundException } from '@nestjs/common';

import { Seed } from '../entities/seed.entity';
import { CreateSeedDto, UpdateSeedDto } from '../dtos/seed.dto';

@Injectable()
export class SeedsService {
    private seeds: Seed[] = [{
        id: '01',
        name: 'Northern Light',
        type: 'Indica',
        dnaOrigin: 'Northern Light S1',
        indoorCrop: 550,
        outerCrop: 625,
        indoorHeight: 160,
        outerHeight: 220,
        floweringTime: 9,
        cropMonth: 'Septiembre',
        effect: 'Colocón, Equilibrado, Lúcido',
        thc: 18,
        cbd: 0,
    }];

    findAll() {
        return this.seeds;
    }

    findOneId(id: string) {
        const seed = this.seeds.find((item) => item.id === id);
        if(!seed) {
            throw new NotFoundException('Semilla no encontrada');
        }
        return seed;
    }

    create(payload: CreateSeedDto) {
        const newSeed = {
            id: '12',
            ...payload,
        }
        this.seeds.push(newSeed);
        return newSeed;
    }

    update(id: string, payload: UpdateSeedDto) {
        const seed = this.findOneId(id);
        if(seed) {
            const index = this.seeds.findIndex((item) => item.id === id);
            this.seeds[index] = {
                ...payload,
                ...seed
            };
        }
        return seed;
    }

    delete(id: string){
        const index = this.seeds.findIndex((item) => item.id === id);
        if(index === -1) {
            throw new NotFoundException('Semilla no encontrada');
        }
        this.seeds.splice(index, 1);
    }

}
