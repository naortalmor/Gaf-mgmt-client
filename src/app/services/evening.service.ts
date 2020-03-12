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
            title: 'חדר בריחה',
            content: 'lorem ipsum',
            images: []
        },
        {
            id: 1,
            imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            title: 'בירה בשרונה',
            content: 'lorem ipsum',
            images: []
        },
        {
            id: 2,
            imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            title: 'ארוחת בוקר במקס ברנר',
            content: 'lorem ipsum',
            images: []
        },
        {
            id: 3,
            imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            title: 'האקאתון',
            content: 'lorem ipsum',
            images: []
        },
        {
            id: 4,
            imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            title: 'VR',
            content: 'lorem ipsum',
            images: []
        }
    ];

    this.store.dispatch(INIT_EVENINGS({evenings}));
  }
}
