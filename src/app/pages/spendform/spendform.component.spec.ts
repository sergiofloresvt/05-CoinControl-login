import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendformComponent } from './spendform.component';

describe('SpendformComponent', () => {
  let component: SpendformComponent;
  let fixture: ComponentFixture<SpendformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpendformComponent]
    });
    fixture = TestBed.createComponent(SpendformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
