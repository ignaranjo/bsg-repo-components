import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsgButtonComponent } from './bsg-button.component';

describe('BsgButtonComponent', () => {
  let component: BsgButtonComponent;
  let fixture: ComponentFixture<BsgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsgButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
