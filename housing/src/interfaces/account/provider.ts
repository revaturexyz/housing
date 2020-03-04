import { Status } from './status';

/*Via the Identity API  which is its own injected service 
* this information will be avaialble
* there for we should be able to get this info, creat 
*/
export interface Provider {
  providerId: string;
  coordinatorId: string;
  name: string;
  email: string;
  status: Status;
  accountCreatedAt: Date;
  accountExpiresAt: Date;
}

