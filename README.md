Here's the README file for your project:

---

# Turf Booking Web Application

## Introduction
The **Turf Booking Web Application** is a simple web-based application built with **Angular**. It allows users to browse through a list of available turfs, view detailed information about each turf, and book a turf of their choice. This project showcases essential Angular concepts such as components, routing, services, pipes, and form validation, demonstrating your proficiency with the framework.

## Features
- **List of Turfs**: Displays available turfs for booking with relevant information.
- **Turf Details**: Detailed view of each turf, including location, price, and description.
- **Turf Booking**: A booking form that includes required fields such as name, date, and contact details.
- **Form Validation**: Includes form validation for required fields and formats.
- **No Backend**: Data is statically stored in arrays/objects to simulate turf details.
- **Routing & Navigation**: Utilizes Angular routing for navigation between the turf list, details, and booking form.
- **Neat & Clean UI**: The interface is user-friendly and responsive.

## Technologies Used
- **Angular**: Front-end framework for building the single-page application.
- **TypeScript**: Used to manage component logic and application data.
- **HTML & CSS**: For the structure and styling of the user interface.
- **Angular Forms**: Handles form validation and submission.
- **Angular Routing**: For navigation between views.
- **Angular Services**: For managing and sharing data across components.
- **Angular Pipes**: Used for transforming data in templates (e.g., currency formatting).

## Prerequisites
Before running this application, ensure you have the following installed:
- **Node.js** (v12 or higher)
- **Angular CLI** (v12 or higher)

## Installation and Setup

### 1. Clone the Repository
```bash
git clone <https://github.com/SIDDH5320/Turf-Booking-App.git>
```

### 2. Navigate to the Project Directory
```bash
cd turf-booking-angular
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Application
```bash
ng serve
```
Navigate to `http://localhost:4200` in your browser to view the application.

## Application Structure

### Components
- **TurfListComponent**: Displays the list of available turfs.
- **TurfDetailsComponent**: Shows detailed information for the selected turf.
- **TurfBookingComponent**: Allows users to book a turf via a form with validations.

### Services
- **TurfService**: Manages turf data and handles communication between components.

### Routing
- **AppRoutingModule**: Defines routes for turf list, details, and booking form pages.

## Static Data
All turf information is stored in a service using static arrays/objects to simulate the backend. Here's an example of how the turf data is structured:
```typescript
export const TURFS = [
  {
    id: 1,
    name: 'GreenField Turf',
    location: 'Downtown',
    price: 150,
    description: 'A well-maintained, synthetic turf perfect for soccer and cricket.'
  },
  {
    id: 2,
    name: 'BlueSky Arena',
    location: 'Uptown',
    price: 200,
    description: 'A premium turf for football and baseball games.'
  }
];
```

## Form Validation
The booking form includes validation rules to ensure data integrity:
```typescript
this.bookingForm = this.fb.group({
  name: ['', Validators.required],
  date: ['', Validators.required],
  contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
});
```

## Future Improvements
- Integrate a backend API for dynamic data fetching and bookings.
- Add authentication for users to track their booking history.
- Improve UI/UX design and add animations.

## Conclusion


