import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsDeckComponent } from './ads-deck.component';

describe('AdsDeckComponent', () => {
  let component: AdsDeckComponent;
  let fixture: ComponentFixture<AdsDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
