import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperheroesModule } from './superheroes/superheroes.module';
import * as redisStore from 'cache-manager-redis-store';
import * as dotenv from "dotenv";
dotenv.config({ path: './.env' });

@Module({
  imports: [SuperheroesModule,
    CacheModule.register({
      store: redisStore,
      url: process.env.REDIS_DOCKER_URL,
      ttl: 60 * 0.1, // 5 min 
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }