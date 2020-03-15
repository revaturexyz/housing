# Provider Status
## Summary
Does not currently see any use in the live product, but may not always be that way. 
Originally it was intended that providers would have to be approved by coordinator accounts, and until that moment they would exist in the system as
awaiting approval, with limited privileges. 
Best bet is to ask your instructor / other maintainers of P3 how they feel about its inclusion. 

Would use AccountService (IdentityService in the backend) to pull up a provider object by their id 
Would use UserService to maintain the currently logged in user:
Inclusion of OktaAuthService is necessary as guid is what we use to explain the current user

## Services
- Account Service: [Account-Service]

## Issues

[Account-Service]: ../Services/Identity/Account.md