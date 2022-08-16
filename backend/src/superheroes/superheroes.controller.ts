import { CacheInterceptor, Controller, Get, Param, UseInterceptors, } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import fetch from 'node-fetch';
import * as dotenv from "dotenv";
dotenv.config({ path: './.env' });

@Controller('superheroes')
export class SuperheroController {

    constructor(private readonly superheroesService: SuperheroesService) { }

    @Get('search/:name')
    async searchSuperHeroByName(@Param('name') name: string) {
        const result = await fetch(`${process.env.API_URL}${process.env.TOKEN}/search/${name}`);
        const data = await result.json();
        this.superheroesService.saveHeroes(data);
        if (data.response === "error") {
            return data;
        }
        return data.results;
    }

    @Get('getherobyid/:id')
    async getHeroById(@Param('id') id: string) {
        const hero = await this.superheroesService.getHeroById(id);
        if (hero) {
            return hero;
        }
        console.log("data not found in redis cache, fetching from api");
        const result = await fetch(`${process.env.API_URL}${process.env.TOKEN}/${id}`);
        const data = await result.json();
        const newHero = await this.superheroesService.saveHero(data);
        return newHero;
    }
}