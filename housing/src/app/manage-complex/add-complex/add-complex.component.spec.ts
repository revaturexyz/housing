import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule, MatSelectModule, MatTableModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { AddComplexComponent } from './add-complex.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { By } from '@angular/platform-browser';

describe('AddComplexComponent', () => {
  let component: AddComplexComponent;
  let fixture: ComponentFixture<AddComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatStepperModule,
        MatChipsModule,
        MatInputModule,
        NoopAnimationsModule],
      declarations: [AddComplexComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have disabled submit button', () => {
    const buttonSelector = fixture.debugElement.query(By.css('#postLivingComplex')).nativeElement;
    fixture.detectChanges();
    expect(buttonSelector.valid).toBeFalsy();
  });
});
