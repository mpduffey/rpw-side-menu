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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var RPWSideMenu = (function () {
    function RPWSideMenu() {
        this.menu = [
            { path: "/rpw-dashboard", label: "RPW Dashboard" },
            { path: "/county-list", label: "County List" },
            { path: "/county-profile", label: "County Profile" },
            { path: "/reporter-form", label: "Reporter Form" },
            { path: "/upload-form", label: "Upload Form" }
        ];
    }
    RPWSideMenu = __decorate([
        core_1.Component({
            selector: 'rpw-side-menu',
            template: '<p *ngFor="let item of menu"><a [routerLink]="[item.path]">{{item.label}}</a></p>',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], RPWSideMenu);
    return RPWSideMenu;
}());
exports.RPWSideMenu = RPWSideMenu;
//# sourceMappingURL=rpw-side-menu.js.map