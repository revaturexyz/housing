import { Status } from './account/status';

// To hold info for users that log in as tenant
export interface IdentityTenant {
    Name: string;
    TenantId: string;
    Email: string;
}

// To hold info for users that log in as coordinator

export interface IdentityCoordinator {
    CoordinatorId: string;
    Notifications: Notification[];
    Name: string;
    Email: string;
    TrainingCenterName: string;
    TrainingCenterAddress: string;
}

// To hold info for users that log in as provider

export interface IdentityProvider {
    ProviderId: string;
    CoordinatorId?: string;
    Name: string;
    Email: string;
    Status: Status;
    AccountCreatedAt: Date;
    AccountExpiresAt: Date;
}
