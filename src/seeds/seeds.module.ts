import { Module } from '@nestjs/common';
import { SeedsController } from './controller/seeds.controller';
import { SeedsService } from './services/seeds.service';

@Module({
  controllers: [SeedsController],
  providers: [SeedsService]
})
export class SeedsModule {}
