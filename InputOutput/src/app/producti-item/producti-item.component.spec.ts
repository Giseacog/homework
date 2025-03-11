import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiItemComponent } from './producti-item.component';

describe('ProductiItemComponent', () => {
  let component: ProductiItemComponent;
  let fixture: ComponentFixture<ProductiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductiItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
