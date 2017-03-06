import { App } from '../../app';
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class Home {
    constructor(public message: string,
        public app: App,
        public router: Router,
        public homeRef) {
    }

    attached(): void {
        const navElement = document.querySelector('.nav');
        // const wrapper = document.querySelector('.wrapper');
        // wrapper['style'].filter = 'none';
        navElement['style'].visibility = 'visible';
        navElement['style'].display = 'inline';
        navElement['style'].opacity = '1';
    }

    public navigateToProjects(): void {
        this.router.navigateToRoute('projects');
    }

    // canDeactivate(): boolean {
    //     this.homeRef['style'].height = '103%';
    //     return true;
    // }
}