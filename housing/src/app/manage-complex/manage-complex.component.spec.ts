import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComplexComponent } from './manage-complex.component';
import {
  MatFormFieldModule, MatSelectModule,
  MatCardModule,
  MatPaginatorModule, MatTableModule, MatStepperModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddRoomComponent } from './add-room/add-room.component';
import { ShowRoomComponent } from './show-room/show-room.component';
import { ComplexDetailsComponent } from './complex-details/complex-details.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { EditComplexComponent } from './edit-complex/edit-complex.component';
import { AddComplexComponent } from './add-complex/add-complex.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

xdescribe('ManageComplexComponent', () => {
  let component: ManageComplexComponent;
  let fixture: ComponentFixture<ManageComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule, FormsModule,
        ReactiveFormsModule, MatSelectModule,
        MatCardModule, MatDatepickerModule,
        MatTableModule, MatPaginatorModule,
        NoopAnimationsModule, MatMomentDateModule,
        MatChipsModule, MatIconModule,
        MatExpansionModule, MatCheckboxModule,
        MatStepperModule
      ],
      declarations: [
        ManageComplexComponent, AddRoomComponent,
        ComplexDetailsComponent, EditRoomComponent,
        EditComplexComponent, AddComplexComponent,
        ShowRoomComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create manage complex component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial content', () => {
    const messageSelector = fixture.debugElement.query(By.css('#initial-content')).nativeElement;
    expect(messageSelector).toBeTruthy();
  });

  it('should have a view complexes button', () => {
    const buttonSelector = fixture.debugElement.query(By.css('#view-complexes-button')).nativeElement;
    fixture.detectChanges();
    expect(buttonSelector).toBeTruthy();
  });

  it('should have a manage complexes button', () => {
    const buttonSelector = fixture.debugElement.query(By.css('#manage-complexes-button')).nativeElement;
    fixture.detectChanges();
    expect(buttonSelector).toBeTruthy();
  });
});
