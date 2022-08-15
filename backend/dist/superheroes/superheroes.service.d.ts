import { Cache } from "cache-manager";
export declare class SuperheroesService {
    private readonly cacheManager;
    constructor(cacheManager: Cache);
    saveHeroes(data: {
        results: object[];
    }): Promise<object[]>;
    saveHero(hero: object): Promise<object>;
    getHeroById(id: string): Promise<unknown>;
}
