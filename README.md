# Doctor Listing Page

A dynamic **Doctor Listing Page** where users can search, filter, and sort doctors based on specialties, consultation mode, and fees. The page fetches doctor data from a mock API and presents it with a responsive and user-friendly design.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Folder Structure](#folder-structure)
7. [Demo](#demo)


## Overview

This Doctor Listing Page allows users to search for doctors by name, filter them by specialties, and sort them based on their fees or experience. The UI is designed to be simple, intuitive, and mobile-responsive.

### Key Features:
- **Search Functionality**: Search for doctors by name.
- **Filters**: Filter doctors by consultation mode (Video Consult / In Clinic) and specialties.
- **Sort Options**: Sort doctors based on fees (Low to High) or experience (High to Low).
- **Responsive Design**: The page is fully responsive and works on mobile and desktop.
- **API Integration**: Fetches doctor data from a mock API and displays it.

## Features

1. **Search Doctors**: An autocomplete search feature for doctors based on the name.
2. **Filters**:
    - **Consultation Mode**: Filter doctors based on consultation type (Video Consult / In Clinic).
    - **Specialties**: Filter doctors by specialties such as Cardiologist, Dermatologist, etc.
3. **Sorting**: Option to sort doctors based on fees (low to high) or experience (high to low).
4. **Responsive Layout**: Designed to work seamlessly across different devices (Mobile, Tablet, Desktop).
5. **API Data Fetching**: Fetches real doctor data from a mock API (`https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json`).

## Installation

To run the project locally, follow these steps:

### Prerequisites

- Node.js installed on your system.
- npm or yarn for package management.

### Steps to Set Up

1. Clone the repository:
   ```bash
   git clone https://github.com/khushi505/doctor-listing-page.git
   ```

2. Navigate to the project directory:
   ```bash
   cd doctor-listing-page
   ```

3. Install the dependencies:
   ```bash
   npm install
   # OR
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # OR
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to view the project.

## Usage

Once the app is running locally, you can:
1. **Search for Doctors**: Type in the search bar to find doctors by name.
2. **Apply Filters**: Use the filter panel to select consultation modes and specialties.
3. **Sort Doctors**: Choose from sorting options like `Fees (Low to High)` or `Experience (High to Low)`.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vite**: A build tool for faster development with hot module replacement (HMR).
- **JavaScript (ES6+)**: Modern JavaScript for app functionality.
- **HTML/CSS**: Basic web development technologies for page structure and styling.

## Folder Structure

```plaintext
doctor-listing-page/
│
├── src/
│   ├── assets/               
│   ├── components/           # React components (Header, DoctorList, FilterPanel)
│   ├── pages/                # Page components (DoctorListPage)
│   ├── utils/                # Utility functions like API fetching
│   ├── App.jsx               # Main component for app layout
│   ├── index.css             # Global CSS styles with Tailwind
│   └── main.jsx              # Entry point for React application
│
├── public/                   # Public files (index.html)
├── package.json              # NPM package configuration
└── tailwind.config.js        # Tailwind CSS configuration
```


## Demo 


https://github.com/user-attachments/assets/8df20fb3-d25c-4526-b707-f39826b8fac8




