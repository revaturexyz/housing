import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ViewRoomService } from './view-room.service';

describe('ViewRoomService', () => {
  let service: ViewRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViewRoomService]
    });

  });

  it('should be created', () => {
    const service: ViewRoomService = TestBed.get(ViewRoomService);
    expect(service).toBeTruthy();
  });
});
