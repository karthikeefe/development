import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusrouteComponent } from './busroute.component';

describe('BusrouteComponent', () => {
  let component: BusrouteComponent;
  let fixture: ComponentFixture<BusrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
