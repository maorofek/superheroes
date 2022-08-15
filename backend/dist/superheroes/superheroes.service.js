"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperheroesService = void 0;
const common_1 = require("@nestjs/common");
let SuperheroesService = class SuperheroesService {
    constructor(cacheManager) {
        this.cacheManager = cacheManager;
    }
    async saveHeroes(data) {
        const results = data.results;
        for (const key in results) {
            const element = results[key];
            await this.saveHero(element);
        }
        return data.results;
    }
    async saveHero(hero) {
        await this.cacheManager.set(hero["id"], hero, { ttl: 60 * 5 });
        return hero;
    }
    async getHeroById(id) {
        return await this.cacheManager.get(id);
    }
};
SuperheroesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object])
], SuperheroesService);
exports.SuperheroesService = SuperheroesService;
//# sourceMappingURL=superheroes.service.js.map