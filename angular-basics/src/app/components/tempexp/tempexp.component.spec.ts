import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempexpComponent } from './tempexp.component';

describe('TempexpComponent', () => {
  let component: TempexpComponent;
  let fixture: ComponentFixture<TempexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
