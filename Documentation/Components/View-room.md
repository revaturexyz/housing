Summary as of 3/13/2020
The view-room component allows a tenant user to view the details of the room in any complex that is linked to their account. 

Services
It uses the tenant service to communicate backend objects, as well as the lodging service for Okta manipulation.

Issues
Worthy of note as that it uses NINE different interfaces, be careful about refactoring if you should choose to do so. 