import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('FooterComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have footer content', () => {
      const messageSelector = fixture.debugElement.query(By.css('#footer')).nativeElement;
      expect(messageSelector).toBeTruthy();
  })
});
