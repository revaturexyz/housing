import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule, MatCardModule } from '@angular/material';
import { ShowRoomComponent } from './show-room.component';
import { By } from '@angular/platform-browser';

xdescribe('ShowRoomComponent', () => {
  let component: ShowRoomComponent;
  let fixture: ComponentFixture<ShowRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatChipsModule, MatCardModule],
      declarations: [ShowRoomComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have back button', () => {
    const buttonSelector = fixture.debugElement.query(By.css('#back-button')).nativeElement;
    fixture.detectChanges();
    expect(buttonSelector).toBeTruthy();
  });
});
