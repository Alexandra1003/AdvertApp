import { Component, OnInit } from '@angular/core';
import { AdsService } from './ads.service';
import { IAd } from 'src/app/shared/interfaces/ad.i';
import { mockAds } from 'src/app/shared/mocks/mock.ads';

@Component({
  selector: 'app-ads-deck',
  providers: [AdsService],
  templateUrl: './ads-deck.component.html',
  styleUrls: ['./ads-deck.component.scss']
})
export class AdsDeckComponent implements OnInit {

  p: number = 1;
  adsList: IAd[];
  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.adsService.setTempAds(mockAds);
    this.adsList = this.adsService.getAllAds();
  }

}
