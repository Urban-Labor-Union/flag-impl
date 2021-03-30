import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagScatteredContainerComponent } from './flag-scattered-container.component';

describe('FlagScatteredContainerComponent', () => {
  let component: FlagScatteredContainerComponent;
  let fixture: ComponentFixture<FlagScatteredContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagScatteredContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagScatteredContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
