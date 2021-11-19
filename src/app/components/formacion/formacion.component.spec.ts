import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionComponent } from './formacion.component';

fdescribe('FormacionComponent', () => {
  let component: FormacionComponent;
  let fixture: ComponentFixture<FormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change position in forward', () => {
    let position = component.change(1);
    expect(position).toBe(1);
  });

  it('should not change position in back',() => {
    let position = component.change(0);
    expect(position).toBe(0);
  });
});
