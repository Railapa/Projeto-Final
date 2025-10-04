import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyEndings } from './happy-endings';

describe('HappyEndings', () => {
  let component: HappyEndings;
  let fixture: ComponentFixture<HappyEndings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappyEndings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyEndings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
