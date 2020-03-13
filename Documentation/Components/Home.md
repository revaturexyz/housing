Summary as of 03/13/2020
The home component is the landing page for every user regardless of account type. It will display one of 3 variants of the same view
in accordance to the currently logged in user's access level. 

Services
Uses OktaAuthService, to receive and persist a user-specific guid 
Uses UserService, to associate a role based access level with the guid that we've been given. 

Issues
