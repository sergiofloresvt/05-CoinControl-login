import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformularioComponent } from './userformulario.component';

describe('UserformularioComponent', () => {
  let component: UserformularioComponent;
  let fixture: ComponentFixture<UserformularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserformularioComponent]
    });
    fixture = TestBed.createComponent(UserformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
