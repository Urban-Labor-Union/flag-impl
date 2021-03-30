import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagConsolidatedComponent } from './flag-consolidated.component';

describe('FlagConsolidatedComponent', () => {
  let component: FlagConsolidatedComponent;
  let fixture: ComponentFixture<FlagConsolidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagConsolidatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagConsolidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
