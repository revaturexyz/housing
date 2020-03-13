## Summary
The view-room component allows a tenant user to view the details of the room in any complex that is linked to their account. It uses the tenant service to communicate backend objects, as well as the lodging service to gather room information

## Services
- Tenant Service: [Tenant-Service]
- Lodging Service: [Lodging-Service]

## Issues
Worthy of note as that it uses NINE different interfaces, be careful about refactoring if you should choose to do so. 

[Lodging-Service]: ../Services/Lodging/Lodging.md
[Tenant-Service]: ../Services/Tenant/Tenant.md