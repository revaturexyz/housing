import { Amenity } from 'src/interfaces/amenity';
import { Address } from 'src/interfaces/address';
import { Status } from 'src/interfaces/account/status';
import { Provider } from 'src/interfaces/account/provider';
import { Complex } from 'src/interfaces/complex';

export class TestAmenityData {
  static dummyAmenity1: Amenity = {
    amenityId: 1,
    amenity: 'gym',
    isSelected: true
  };

  static dummyAmenity2: Amenity = {
    amenityId: 2,
    amenity: 'pool',
    isSelected: true
  };
}

export class TestComplexData {

  static dummyAddress: Address = {
    addressId: 1,
    streetAddress: '1001 S Center St',
    city: 'Arlington',
    state: 'TX',
    zipcode: '76010'
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
    complexId: 1,
    apiAddress: TestComplexData.dummyAddress,
    apiProvider: TestComplexData.dummyProvider,
    complexName: 'liv+',
    contactNumber: '1234567890',
    amenity: [TestAmenityData.dummyAmenity1, TestAmenityData.dummyAmenity2],
  };
}
