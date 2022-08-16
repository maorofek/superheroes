import { SuperheroesService } from './superheroes.service';
export declare class SuperheroController {
    private readonly superheroesService;
    constructor(superheroesService: SuperheroesService);
    searchSuperHeroByName(name: string): unknown;
    getHeroById(id: string): unknown;
}
