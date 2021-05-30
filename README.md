# Labcorp-Ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

Note: I only have basic knowledge of Angular. I work closely with Angular developers, but I am mostly a back-end developer. I developed this by looking up on tutorials through trial and error. Hence, admittedly, this is a very crude newbie application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Pre-requisite

This project expects a REST API at http://localhost:8080/api/employee serving needed data. It uses the Spring Boot  application that is available at https://github.com/eldhothomas/labcorp 


## Functional details 

There is a single page on the application with three forms. Each form results in the display of details of an employee on the top of the page.

Form 1 : Retrieve the details of an employee.
Form 2 : Record working days for an employee.
Form 3 : Take vacation for an employee.