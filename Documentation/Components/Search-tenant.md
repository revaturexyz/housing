## Summary
Grants users of coordinator privilege the ability to list existing tenants according to various filters.
Utilizes tenant-searcher service for its 'getTenantByParameters' method, which comprises most of this component's functionality.  

## Services
 - Tenant Searcher Service: [Tenant-Searcher]

## Issues
There exists a nonbinary option in the drop down menu for gender. It does not map to anything on the backend. 
Consider removing it from the user view, or adding a nonbinary option to the backend for gender. 

[Tenant-Searcher]: ../Services/Tenant/Tenant-searcher.md