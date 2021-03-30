import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagConsolidatedContainerComponent } from './flag-consolidated-container.component';

describe('FlagConsolidatedContainerComponent', () => {
  let component: FlagConsolidatedContainerComponent;
  let fixture: ComponentFixture<FlagConsolidatedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagConsolidatedContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagConsolidatedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
