## Summary
This is the main component used for coordinators to do CRUD operations on tenants.
It is also the component used for a tenant to view their information.
In the future, this should also be used for tenants to request updates to their information.

## Routes
```
dashboard/add-tenant
dashboard/edit-tenant/:id
dashboard/select-tenant/:id
dashboard/tenant-profile
```
The component changes modes based on the url used to access it. These modes are set by routeSub which subscribes to url changes. In addition to this, an auxiliary function (editMode) checks to see if the component is in edit mode, which is used by `*ngIf` directives in the front end to set whether the fields are editable.

## Services
- [TenantService]
- [TenantSearcherService]
- [LodgingService] (doesn't seem to be used at the moment)

[TenantService]: ../Services/Tenant/Tenant.md
[TenantSearcherService]: ../Services/Tenant/Tenant-searcher.md
[LodgingService]: ../Services/Lodging/Lodging.md

## Issues
1. The mat-card used to display the components on various cards is built for editing, so after you switch from one card to another, it displays an edit symbol instead of a number for the "step". Might be solvable just with scss and/or html edits.
2. The various form fields in edit mode have required validation markers, but this isn't actually being checked before submitting. Also, some of the fields might need more specific validation (such as email).


