import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseActionComponent } from './expense-action.component';

describe('ExpenseActionComponent', () => {
  let component: ExpenseActionComponent;
  let fixture: ComponentFixture<ExpenseActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
