# alpine :: readme

the developer repository

## Maintainer

[![fred belotte][avatar]][maintainer]

[avatar]: https://avatars0.githubusercontent.com/u/22018714?s=92&v=4
[license]: https://github.com/fredbelotte/alpine/blob/master/LICENSE 'MIT License'
[maintainer]: https://github.com/fredbelotte 'fred belotte'

# Revature Housing

Revature Housing is an application where tenants, coordinators, and providers of housing complexes that are open to revature employees can manage their housing concerns. Tenants can view their complex, amenities, and give feedback. Coordinators can manage incoming trainees and assign them rooms, and providers can add new complexes, edit existing ones, and specify available rooms and amenities.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

.Net v3.1
Node.js v12.14.0
Angular CLI v8.3.21
Git
(recommended) Visual Studio Code

```
npm install @angular/cli

```

### Installing

This step by step series of examples will tell you how to get a development env running

Create a new folder and navigate to it in your bash terminal

```
cd ~/New_Folder
```

Open Visual Studio Code

```
Code .
```

Using git, clone the repository using the repository address

```
git clone https://github.com/revaturexyz/housing.git
```

Navigate to the angular folder inside the repository folder called "housing"

```
cd housing/housing
```

Run the Project

```
ng serve
```

## Running The Tests

Run tests using Karma CLI

```
ng test
```

This will run all tests

### Coding Interface Tests

We used Jasmine to test the interface functionality

```
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('FooterComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have footer content', () => {
      const messageSelector = fixture.debugElement.query(By.css('#footer')).nativeElement;
      expect(messageSelector).toBeTruthy();
  });
});

```
### Linting Your Application

To analyze whitespace, and enforces formatting rules

```
ng lint
```

## Running Aplication Using Containers

Deploy using Docker Compose

```
docker-compose up
```

## Built With

* [Node](https://nodejs.org/en/docs/) - The web framework used
* [Angular](https://angular.io/docs) - The framework used for building the interface
* [Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - The styling library used for styling the interface
* [Docker](https://docs.docker.com/) - Container Management
* [Jasmine](https://jasmine.github.io/) - Used to generate tests for the interface
* [Karma](https://karma-runner.github.io/latest/index.html) - Used to generate tests for the interface
* [XUnit](https://xunit.net/docs/getting-started/netcore/cmdline) - Used to generate tests for the logic
* [Okta](https://developer.okta.com/docs/) - Used for security
* [Postman](https://learning.getpostman.com/docs/postman/launching-postman/introduction/) - Used to test services
* [Coverlet](https://github.com/tonerdo/coverlet) - Used for test coverage


## Versioning

We use [Git](https://git-scm.com/) for versioning. The current version for this project as of 01/09/2020 is v20200109.03. 

## Authors

* **Sergio De Anda** - *Team Interface Leader* - [Sergio-De-Anda](https://github.com/Sergio-De-Anda)
* **Joshua Guillory** - *Team Interface* - [jguillodev](https://github.com/jguillodev)
* **Lyndsay Durbin** - *Team Interface* - [lyndsay-durbin](https://github.com/lyndsay-durbin)
* **Jimmy Collazo** - *Team Interface* - [collazoj](https://github.com/collazoj)
* **Tyler Gilbert** - *Team Interface* - [GilbyScarChest](https://github.com/GilbyScarChest)

See also the list of [contributors](https://github.com/revaturexyz/housing/graphs/contributors) who participated in this project.

## License

the project is made available under the [MIT License][license].

