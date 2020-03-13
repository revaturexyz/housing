## Summary
A provider will pass their guid id to a lodging get method in order to view all complexes associated to that provider ID. A coordinator will recieve all complexes to view from the lodging service. The user will have the ability to select any complex.

This componet is a parent component of the other components associated with CRUD operations on both Complex and Rooms. They are routed via modes, which should eventally be altered to a better design. See HTML source code for more information


## Child Components
[Add-Complex]
[Add-Room]
[Complex-Details]
[Edit-Complex]
[Edit-Room]
[Show-Room]

## Services
- Lodging Service: [Lodging-Service]

## Issues
Instead of a select drop down, button click on each complex card is an enhancement


[Lodging-Service]: ../../Services/Lodging/Lodging.md

[Add-Complex]: Add-complex.md
[Add-Room]: Add-room.md
[Complex-Details]: Complex-details.md
[Edit-Complex]: Edit-complex.md
[Edit-Room]: Edit-room.md
[Show-Room]: Show-room.md