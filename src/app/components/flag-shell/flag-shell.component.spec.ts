import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagShellComponent } from './flag-shell.component';

describe('FlagShellComponent', () => {
  let component: FlagShellComponent;
  let fixture: ComponentFixture<FlagShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
