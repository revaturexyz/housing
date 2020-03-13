# Angular Application (Front End) <br/>
## Setting Up

Open up Git Bash and clone the front end application into your desired folder: <br/>
`git clone https://github.com/revaturexyz/housing.git`

Make sure you are in the housing folder and make sure you are on your feature branch: <br/>
`cd housing/housing`

This will install all necessary dependencies specified in the package.json.
You will need these in order to sufficiently run the application: <br/>
`npm install`

Go into your source folder and you should now be able to run the application <br/>
```
cd housing/housing/src
ng serve --open
```



## Roles:
### Coordinator:
Currently has the ability to add tenants, search for tenants, edit/delete tenants, view complex and room information. View information relating to tenants

- Create Tenant: [Tenant-Profile]
- View Tenant Information: [Tenant-Profile]
- Edit Tenant Information: [Tenant-Profile]
- Delete Tenant: [Tenant-Profile]
- Search Tenant: [Search-Tenant]
- View Complex/Rooms: [Manage-Complex]

Other Components Currently Not in full function:
- Notifications: [Coordinantor-Notification]
- Assign Tenant: [Assign-Tenant]

### Provider:
Currently Has the ability to manage complexes, which consists of observing current complexes that they manage. The ability to view the rooms within the complex that they manage. Has full CRUD operations on both the Complexes and Rooms mapped to each Provider

- Create Complex: [Add-Complex]
- View/Select Complexes: [Manage-Complex]
- View Complex: [Complex-Details]
- Edit Complex: [Edit-Complex]
- Delete Complex: [Edit-Complex]
- Create Room: [Add-Room]
- View/Select Rooms: [Complex-Details]
- View Room: [Show-Room]
- Edit Room: [Edit-Room]
- Delete Room: [Edit-Room]

Other Components Currently Not in full function:

- Edit Provider: [Edit-Provider]
- Provider Status: [Provider-status]


### Tenant:
Currently Can view their profile information, view room information, as well as make maintenance requests. Maintenance requests will be fully functional when notifications are made

- View Room: [View-Room]
- View Profile: [Tenant-Profile]
- Maintenance Reqest: [Tenant-Maintenance]



[Tenant-Profile]: Components/Tenant-profile.md
[Search-Tenant]: Components/Search-tenant.md
[Assign-Tenant]: Components/Assign-tenant-to-room.md
[Coordinantor-Notification]: Components/Coordinantor-notification.md

[Manage-Complex]: Components/Manage-Complex/Manage-Complex.md
[Add-Complex]: Components/Manage-Complex/Add-complex.md
[Complex-Details]: Components/Manage-Complex/Complex-details.md
[Edit-Complex]: Components/Manage-Complex/Edit-complex.md
[Edit-Room]: Components/Manage-Complex/Edit-room.md
[Show-Room]: Components/Manage-Complex/Show-room.md
[Add-Room]: Components/Manage-Complex/Add-room.md
[Edit-Provider]: Components/Edit-provider.md
[Provider-Status]: Components/Provider-status.md

[View-Room]: Components/View-room.md
[Tenant-Maintenance]: Components/Tenant-maintenance.md