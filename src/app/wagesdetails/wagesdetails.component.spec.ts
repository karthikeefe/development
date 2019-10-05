import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesdetailsComponent } from './wagesdetails.component';

describe('WagesdetailsComponent', () => {
  let component: WagesdetailsComponent;
  let fixture: ComponentFixture<WagesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
