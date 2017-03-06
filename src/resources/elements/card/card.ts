import { customElement } from 'aurelia-framework';

@customElement('card')
export class Card {
    constructor() {}

    activate(project) {
        console.log(project.name);
    }
}