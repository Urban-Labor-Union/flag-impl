import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagSingleComponent } from './flag-single.component';

describe('FlagSingleComponent', () => {
  let component: FlagSingleComponent;
  let fixture: ComponentFixture<FlagSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
