import { App } from '../../app';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Projects {
    constructor(public app: App,
        public projects: Object[]) {
    }

    // canActivate(): boolean {
    //     const body = document.querySelector('body');
    //     body['style'].height = '100%';
    //     return true;
    // }

    activate(): void {
        this.projects = [
            {
                name: 'RecipeHealth',
                description: 'Putting scientific research behind healthy foods',
                longDescription: '',
                imgRoute: '../../../images/blueberries.jpg'
            },
            {
                name: 'They Call Me Sugar',
                description: 'Professional Hand Crafted Cakes and Cookies',
                longDescription: '',
                imgRoute: '../../../images/blurberries2.jpg'
            }
        ];
    }
}