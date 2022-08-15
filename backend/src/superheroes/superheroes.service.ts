import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";

@Injectable()
export class SuperheroesService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) { }

    async saveHeroes(data: { results: object[] }) {
        const results = data.results;
        for (const key in results) {
            const element = results[key];
            await this.saveHero(element); //save data in redis cache for 5 min
        }
        return data.results;
    }

    async saveHero(hero: object) {
        await this.cacheManager.set(hero["id"], hero, { ttl: 60 * 5 }); //save data in redis cache for 5 min
        return hero;
    }

    async getHeroById(id: string) {
        return await this.cacheManager.get(id);
    }
}