import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { appInsightsFactory } from './app.module';

@Component({
  selector: 'dev-nav',
  template: '<p ngClass="testing">Mock nav Component</p>'
})

class MockNavComponent { }

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockNavComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ApplicationInsights,
          useFactory: appInsightsFactory
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'housing'`, () => {
    expect(app.title).toEqual('housing');
  });

  it('should render child nav component', () => {
    expect(fixture.debugElement.query(By.css('.testing')).nativeElement.textContent).toContain('Mock nav Component');
  });
});
