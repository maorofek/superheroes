import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperheroesModule } from './superheroes/superheroes.module';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [SuperheroesModule,
    CacheModule.register({
      store: redisStore,
      url: 'redis://:pcedb6b9cefc1a3cc56aa798ea83e451d040cadcd0ea20b53b24bb817ad0df15d@ec2-3-251-103-12.eu-west-1.compute.amazonaws.com:28729',
      ttl: 60 * 0.1, // 5 min 
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }