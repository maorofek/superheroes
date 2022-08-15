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
exports.SuperheroController = void 0;
const common_1 = require("@nestjs/common");
const superheroes_service_1 = require("./superheroes.service");
const node_fetch_1 = require("node-fetch");
const TOKEN = "10217407242093615";
let SuperheroController = class SuperheroController {
    constructor(superheroesService) {
        this.superheroesService = superheroesService;
    }
    async searchSuperHeroByName(name) {
        const result = await (0, node_fetch_1.default)(`https://www.superheroapi.com/api/${TOKEN}/search/${name}`);
        const data = await result.json();
        this.superheroesService.saveHeroes(data);
        return data.results;
    }
    async getHeroById(id) {
        const hero = await this.superheroesService.getHeroById(id);
        if (hero) {
            return hero;
        }
        console.log("data not found in redis cache, fetching from api");
        const result = await (0, node_fetch_1.default)(`https://www.superheroapi.com/api/${TOKEN}/${id}`);
        const data = await result.json();
        const newHero = await this.superheroesService.saveHero(data);
        return newHero;
    }
};
__decorate([
    (0, common_1.Get)('search/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SuperheroController.prototype, "searchSuperHeroByName", null);
__decorate([
    (0, common_1.Get)('getherobyid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SuperheroController.prototype, "getHeroById", null);
SuperheroController = __decorate([
    (0, common_1.Controller)('superheroes'),
    __metadata("design:paramtypes", [superheroes_service_1.SuperheroesService])
], SuperheroController);
exports.SuperheroController = SuperheroController;
//# sourceMappingURL=superheroes.controller.js.map