import { Amenity } from '../../interfaces/amenity';
import { Status } from '../../interfaces/account/status';
import { Address } from '../../interfaces/address';
import { Provider} from '../../interfaces/account/provider';
import { Complex } from '../../interfaces/complex';


export class MockComplex {

  public amenity: Amenity = {
    amenityId: 1,
    amenity: 'pool',
    isSelected: true,
  };
  public address: Address = {
    addressId: 1,
    streetAddress: '123 Sesame St',
    city: 'Arlington',
    state: 'TX',
    zipcode: '12345'
  };
  public status: Status = {
    statusText: 'approved'
  };
  public provider: Provider  = {
    providerId: 1,
    coordinatorId: '1',
    name: 'john',
    email: 'john@email.com',
    status: this.status,
    accountCreatedAt: new Date(),
    accountExpiresAt: new Date(),
  };
  public complex: Complex = {
    complexId: 1,
    apiAddress: this.address,
    apiProvider: this.provider,
    complexName: 'liv+',
    contactNumber: '1234567890',
    amenity: [this.amenity],
  };

}
