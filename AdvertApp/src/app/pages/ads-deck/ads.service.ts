import { Injectable } from '@angular/core';
import { IAd } from 'src/app/shared/interfaces/ad.i';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor() { }

  setTempAds(adsList) {
    localStorage.setItem('ads', `${JSON.stringify(adsList)}`);
  }

  getAllAds() {
    console.log(JSON.parse(localStorage.getItem('ads')));
    return JSON.parse(localStorage.getItem('ads'));
  }
}
