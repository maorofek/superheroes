import { Cache } from "cache-manager";
export declare class SuperheroesService {
    private readonly cacheManager;
    constructor(cacheManager: Cache);
    saveHeroes(data: {
        results: object[];
    }): unknown;
    saveHero(hero: object): unknown;
    getHeroById(id: string): unknown;
}
