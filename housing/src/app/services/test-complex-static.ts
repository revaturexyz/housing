import { Amenity } from 'src/interfaces/amenity';
import { Address } from 'src/interfaces/address';
import { Status } from 'src/interfaces/account/status';
import { Provider } from 'src/interfaces/account/provider';
import { Complex } from 'src/interfaces/complex';

export class TestAmenityData {
  static dummyAmenity1: Amenity = {
    id: '1',
    amenityType: 'gym',
    description: 'none'
  };

  static dummyAmenity2: Amenity = {
    id: '2',
    amenityType: 'pool',
    description: 'none'
  };
}

export class TestComplexData {

  static dummyAddress: Address = {
    addressID: '1',
    country: 'USA',
    street: '1001 S Center St',
    city: 'Arlington',
    state: 'TX',
    zipCode: '76010'
  };

  static dummyStatus: Status = {
    statusText: 'approved'
  };

  static dummyProvider: Provider  = {
    providerId: 1,
    coordinatorId: '1',
    name: 'stark enterprises',
    email: 'support@stark.com',
    status: TestComplexData.dummyStatus,
    accountCreatedAt: new Date(),
    accountExpiresAt: new Date(),
  };

  static dummyComplex: Complex = {
    complexId: '1',
    address: TestComplexData.dummyAddress,
    providerId: '1',
    complexName: 'liv+',
    contactNumber: '1234567890',
    complexAmenities: [TestAmenityData.dummyAmenity1, TestAmenityData.dummyAmenity2],
  };
}
