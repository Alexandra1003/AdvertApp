import { Injectable } from '@angular/core';
import { IAd } from 'src/app/shared/interfaces/ad.i';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  currentAdsList: IAd[];
  constructor() { }

  setTempAds(adsList) {
    localStorage.setItem('ads', `${JSON.stringify(adsList)}`);
  }

  getAllAds() {
    this.currentAdsList = JSON.parse(localStorage.getItem('ads'));
    return this.currentAdsList;
  }

  deleteAd(adId) {
    this.currentAdsList = this.currentAdsList.filter(({ id }) => id !== adId);
    localStorage.setItem('ads', `${JSON.stringify(this.currentAdsList)}`);
  }

  createAd(ad) {
    ad.id = this.getNewId();

    if (!localStorage.getItem('ads')) {
      localStorage.setItem('ads', JSON.stringify([ad]));
      return;
    }

    localStorage.setItem('ads', JSON.stringify([...this.currentAdsList, ad]));
  }

  getNewId() {
    let lastId: number = Number(localStorage.getItem('lastAdId'));

    if (typeof lastId === 'undefined') {
      localStorage.setItem('lastAdId', '0');
      return 0;
    }

    const newId = ++lastId;
    localStorage.setItem('lastAdId', `${newId}`);
    return newId;
  }
}
