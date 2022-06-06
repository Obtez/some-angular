import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialOfferComponent } from './trial-offer.component';

describe('TrialOfferComponent', () => {
  let component: TrialOfferComponent;
  let fixture: ComponentFixture<TrialOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
