import { Status } from './account/status';

//To hold info for users that log in as tenant
export interface identityTenant{
    Name: string;
    TenantId: string;
    Email: string;
}

//To hold info for users that log in as coordinator

export interface identityCoordinator{
    CoordinatorId: string;
    Notifications: Notification[];
    Name: string;
    Email: string;
    TrainingCenterName: string;
    TrainingCenterAddress: string;
}

//To hold info for users that log in as provider

export interface identityProvider{
    ProviderId: string;
    CoordinatorId?: string;
    Name: string;
    Email: string;
    Status: Status;
    AccountCreatedAt: Date;
    AccountExpiresAt: Date;
}
