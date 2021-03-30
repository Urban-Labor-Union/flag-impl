import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagScatteredComponent } from './flag-scattered.component';

describe('FlagScatteredComponent', () => {
  let component: FlagScatteredComponent;
  let fixture: ComponentFixture<FlagScatteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagScatteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagScatteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
