import { TestBed } from '@angular/core/testing';
import { LodgingService } from './lodging.service';



describe('LodgingService', () => {
  let service: LodgingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(LodgingService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });
});