import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantMaintenanceComponent } from './tenant-maintenance.component';

xdescribe('TenantMaintenanceComponent', () => {
  let component: TenantMaintenanceComponent;
  let fixture: ComponentFixture<TenantMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
