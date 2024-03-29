import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesNgHostComponent } from './styles-ng-host.component';

describe('StylesNgHostComponent', () => {
  let component: StylesNgHostComponent;
  let fixture: ComponentFixture<StylesNgHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylesNgHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylesNgHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
