import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagSingleContainerComponent } from './flag-single-container.component';

describe('FlagSingleContainerComponent', () => {
  let component: FlagSingleContainerComponent;
  let fixture: ComponentFixture<FlagSingleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagSingleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagSingleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
