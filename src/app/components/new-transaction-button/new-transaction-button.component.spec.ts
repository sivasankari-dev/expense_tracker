import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionButtonComponent } from './new-transaction-button.component';

describe('NewTransactionButtonComponent', () => {
  let component: NewTransactionButtonComponent;
  let fixture: ComponentFixture<NewTransactionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTransactionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTransactionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
