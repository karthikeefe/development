import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductviewmodalComponent } from './productviewmodal.component';

describe('ProductviewmodalComponent', () => {
  let component: ProductviewmodalComponent;
  let fixture: ComponentFixture<ProductviewmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductviewmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductviewmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
