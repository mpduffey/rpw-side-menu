import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
	selector:			'rpw-side-menu',
	template:			'<p *ngFor="let item of menu"><a [routerLink]="[item.path]">{{item.label}}</a></p>',
  directives: 	[ROUTER_DIRECTIVES]
})

export class RPWSideMenu {
	menu = [
		{path: "/rpw-dashboard", label: "RPW Dashboard"},
		{path: "/county-list", label: "County List"},
		{path: "/county-profile", label: "County Profile"},
		{path: "/reporter-form", label: "Reporter Form"},
		{path: "/upload-form", label: "Upload Form"}
	];
}