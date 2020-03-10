import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TenantProfileComponent } from './tenant-profile.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { TenantService } from 'src/app/services/tenant.service';
import {
  MatCardModule, MatStepperModule
} from '@angular/material';

describe('TenantProfileComponent', () => {
  let component: TenantProfileComponent;
  let fixture: ComponentFixture<TenantProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatCardModule, MatStepperModule, BrowserAnimationsModule, NoopAnimationsModule],
      /*providers: [TenantService],*/
      declarations: [ TenantProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
