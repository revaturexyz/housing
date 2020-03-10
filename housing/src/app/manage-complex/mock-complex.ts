import { Amenity } from '../../interfaces/amenity';
import { Status } from '../../interfaces/account/status';
import { Address } from '../../interfaces/address';
import { Provider} from '../../interfaces/account/provider';
import { Complex } from '../../interfaces/complex';


export class MockComplex {

  public amenity: Amenity = {
    id: '1',
    amenityType: 'pool',
    description: 'none',

  };
  public address: Address = {
    addressID: '1',
    country: 'USA',
    street: '123 Sesame St',
    city: 'Arlington',
    state: 'TX',
    zipCode: '12345'
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
    complexId: '1',
    address: this.address,
    providerId: '1',
    complexName: 'liv+',
    contactNumber: '1234567890',
    complexAmenities: [this.amenity],
  };

}
