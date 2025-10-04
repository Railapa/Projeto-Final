import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionGuide } from './adoption-guide';

describe('AdoptionGuide', () => {
  let component: AdoptionGuide;
  let fixture: ComponentFixture<AdoptionGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
