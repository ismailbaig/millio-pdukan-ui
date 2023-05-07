import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyfooterComponent } from './stickyfooter.component';

describe('StickyfooterComponent', () => {
  let component: StickyfooterComponent;
  let fixture: ComponentFixture<StickyfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
