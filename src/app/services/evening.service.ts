import { config } from './../consts/config';
import { HttpClient } from '@angular/common/http';
import { INIT_EVENINGS } from '../store/evening/evening.actions';
import { Evening } from './../models/evening';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';

@Injectable({providedIn: 'root'})
export class EveningService {

  constructor(private store:Store<AppState>,
              private http:HttpClient) {
    this.initEvenings();
  }

  initEvenings() {
    this.http.get(`${config.serverUrl}/evenings/getTeamEvenings`).subscribe((evenings:Evening[]) => {
      this.store.dispatch(INIT_EVENINGS({evenings}));
    });
  }
}
