import { INIT_EVENINGS } from '../store/evening/evening.actions';
import { Evening } from './../models/evening';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';

@Injectable({ providedIn: 'root' })
export class EveningService {

  constructor(private store: Store<AppState>) {
    this.initEvenings();
  }

  initEvenings() {
    const evenings: Evening[] = [
        {
            id: 0,
            imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            title: 'evening title1',
            content: 'content1',
            images: ['https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba2.jpg']
        },
        {
            id: 1,
            imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            title: 'evening title2',
            content: 'content2',
            images: []
        },
        {
            id: 2,
            imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            title: 'evening title3',
            content: 'content3',
            images: []
        },
        {
            id: 3,
            imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            title: 'evening title4',
            content: 'content4',
            images: []
        },
        {
            id: 4,
            imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            title: 'evening title5',
            content: 'content5',
            images: []
        }
    ];

    this.store.dispatch(INIT_EVENINGS({evenings}));
  }
}
