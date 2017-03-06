import { App } from '../../app';
import { autoinject } from 'aurelia-framework';

@autoinject
export class About {
    constructor(public app: App) { }
}