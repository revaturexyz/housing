Summary as of 03/13/2020
The Nav component is what ties it all together - from here, the Okta service passes in the authentication token, and the generated guid
is placed in session storage, where it persists for the life of our application or 30 minutes time, whichever is shorter. This guid is
how we're able to make database calls based on the currently logged in user. 

Services
Uses the OktaAuthService, to generate a user-unique guid
Uses the AccountService (Identity service in the backend) to explain a user's privileges as one of three roles
Uses the UserService to tie role-specific privileges to the generated Okta guid

Issues
