import { HttpClient as HttpFetch, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { KittenService } from '../../services/kitten-service';

@autoinject
export class Cat {
    constructor(public instaApi: HttpFetch,
        public ellaPics: Object[],
        public kittenService: KittenService,
        public navBg: Element,
        public cat: Element,
        public body) {
        this.body = document.querySelector('body');
        this.instaApi.configure(config => {
            config
                .withBaseUrl('https://www.instagram.com/')
                .withDefaults({
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                })
                .withInterceptor({
                    request(request) {
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request;
                    },
                    response(response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response;
                    }
                });
        });
    }

    activate() {
        this.ellaPics = this.kittenService.ellaData.items
            .filter(item => item.type === 'image');

        document.addEventListener('scroll', function changeBg() {
            const navBg = document.querySelector('.nav-wrapper');
            navBg['style'].backgroundColor = 'rgba(0,0,0,0.5)';
            document.removeEventListener('scroll', changeBg);
        });
    }

    canDeactivate() {
        const navBg = document.querySelector('.nav-wrapper');
        navBg['style'].backgroundColor = 'transparent';
        return true;
    }
}