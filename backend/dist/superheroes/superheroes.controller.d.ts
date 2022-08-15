import { SuperheroesService } from './superheroes.service';
export declare class SuperheroController {
    private readonly superheroesService;
    constructor(superheroesService: SuperheroesService);
    searchSuperHeroByName(name: string): Promise<any>;
    getHeroById(id: string): Promise<unknown>;
}
