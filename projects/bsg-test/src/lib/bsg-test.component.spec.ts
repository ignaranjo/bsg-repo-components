import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsgTestComponent } from './bsg-test.component';

describe('BsgTestComponent', () => {
  let component: BsgTestComponent;
  let fixture: ComponentFixture<BsgTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsgTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
