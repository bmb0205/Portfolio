import { Router, RouterConfiguration } from 'aurelia-router';
import { inject, autoinject } from 'aurelia-framework';
import { Home } from './pages/home/home';
// import * as $ from 'jquery';

@autoinject
export class App {
    public router: Router;
    constructor(public entered: boolean,
        public navBrand,
        public navElement) {
        this.entered = false;

    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Portfolio';
        config.map([
            { route: ['', '#'], moduleId: './pages/landing/landing', name: 'landing', title: 'WELCOME', nav: false },
            { route: 'home', moduleId: './pages/home/home', name: 'home', title: 'HOME', nav: true },
            { route: 'projects', moduleId: './pages/projects/projects', name: 'projects', title: 'PROJECTS', nav: true },
            { route: 'about', moduleId: './pages/about/about', name: 'about', title: 'ABOUT', nav: true }
            // { route: 'cat', moduleId: './pages/cat/cat', name: 'cat', title: 'CAT', nav: true }
        ]);
        this.router = router;
    }

    public enterApplication(): void {
        this.entered = true;
        this.router.navigateToRoute('home');
    }
}
