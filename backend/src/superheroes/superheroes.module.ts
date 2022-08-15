import { SuperheroController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { CacheModule, Module } from '@nestjs/common';

@Module({
    imports: [
        CacheModule.register({
            ttl: 5 * 60, // 5 minutes
        })
    ],
    controllers: [SuperheroController],
    providers: [SuperheroesService]
})
export class SuperheroesModule { }