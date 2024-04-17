import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesNgDeepComponent } from './styles-ng-deep.component';

describe('StylesNgDeepComponent', () => {
  let component: StylesNgDeepComponent;
  let fixture: ComponentFixture<StylesNgDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylesNgDeepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylesNgDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
