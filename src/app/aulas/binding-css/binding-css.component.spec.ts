import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingCssComponent } from './binding-css.component';

describe('BindingCssComponent', () => {
  let component: BindingCssComponent;
  let fixture: ComponentFixture<BindingCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BindingCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
