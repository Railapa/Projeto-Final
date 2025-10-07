import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToHelp } from './how-to-help';

describe('HowToHelp', () => {
  let component: HowToHelp;
  let fixture: ComponentFixture<HowToHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
