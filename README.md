# XeroCodee

This project aims to create a Next.js login application utilizing Appwrite as the backend and Material-UI for the user interface. The project is configured with Babel, Webpack to optimize the build process for efficient development. It follows the MVC (Model-View-Controller) pattern for better organization and scalability.

## Features

- Integration of Appwrite as the backend service
- Implementation of Material-UI for the user interface components
- Configuration of project build using Babel or Webpack
- Adherence to the MVC pattern for structured architecture

## Project Structure

The project architecture follows the MVC pattern:

- `components`: Contains React components
- `config`: Stores configuration files
- `controllers`: Houses API controllers
- `models`: Defines data models
- `pages`: Contains pages built with Next.js

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure environment variables using `.env` file.
4. Run the development server using `npm run dev`.
5. Create a new account by signing up with a new first name, last name, email, and password (atleast 8 characters). Alternatively, for quick login, use the pre-signed-up email "user@test.com" and password "123123123".

## Change Log

### #1: Initial project setup and configuration

- Installed Babel and Webpack plugins
- Added `.babelrc` and `babel.config.js` files for Babel configuration
- Updated `next.config.mjs` for Next.js configuration
- Updated `package.json` to include necessary dependencies and scripts
- Updated `tsconfig.json` for TypeScript configuration
- Set up `layout.tsx` and `page.tsx` as initial components
- Created project structure with the following folders:
  - `components`: For React components
  - `config`: For configuration files
  - `context`: For React context providers
  - `controllers`: For API controllers
  - `models`: For data models
- Added empty `.env` and `.sample.env` files for environment variables

### #2. Designed and implemented Material-UI for UI Components

- Utilized Material-UI library to design and develop UI components
- Integrated Material-UI icons to enhance the visual appeal of the components
- Leveraged Material-UI components and styles for building pages within the Next.js framework
- Implemented routing functionality within the application using Next.js routing capabilities

### #3. Implemented backend features, login/signup functionalities, GitHub login integration, frontend-backend connectivity, Context API for authentication, and ensured responsiveness.

- Integrated backend features by adding `userModel` and `authController` to manage backend functionalities.
- Implemented signup, login, isLoggedIn, and logout functionalities to enable user authentication.
- Integrated login with GitHub for enhanced user authentication options.
- Couldn't integrate login with Google due to the unavailability of a Google Cloud Platform account.
- Established frontend-backend connectivity by connecting frontend components with their respective backend counterparts.
- Utilized Context API to define authentication status, indicating whether the user is logged in or not.
- Ensured responsiveness of login, signup, onboardingone, onboardingtwo, and onboardingthree pages.

### #4. Changes in `.babelrc`, `babel.config.js`, and `tsconfig.json`

- Updated `.babelrc` and `babel.config.js` files for Babel configuration adjustments.
- Modified `tsconfig.json` to accommodate changes in TypeScript configuration.

### #5. Handling ESLint Configuration

- Configured ESLint to extend the Next.js core web vitals configuration.
- Reviewed ESLint rules provided by Next.js and identified conflicts with project setup.
- Overrode specific ESLint rules to address conflicts related to React Hooks usage.
- Explored options to customize ESLint configuration to better suit project requirements.
- Documented the process for handling ESLint configuration conflicts and overrides.

# Challenges Faced

During the development of this project, I encountered the following challenges:

## Google Authentication Integration

I faced difficulty implementing authentication with Google due to the requirement of a Google Cloud Platform account. Since I didn't have access to a Google Cloud Platform account, I couldn't proceed with integrating Google authentication into the application.

## Linting Issues during Deployment

While deploying the project, I encountered linting issues related to ESLint configuration conflicts. These conflicts arose due to differences between the project's setup and the default ESLint rules provided by Next.js. Resolving these conflicts required overriding specific ESLint rules related to React Hooks usage to ensure compatibility with the project's architecture.

## Resolution

- To address the linting issues during deployment, I reviewed the ESLint configuration provided by Next.js and identified the conflicting rules. I then customized the ESLint configuration to override the conflicting rules, ensuring consistency and compatibility with the project setup. This process involved careful consideration of the project requirements and documentation provided by Next.js for handling ESLint configuration conflicts.

- To overcome this challenge, I explored alternative authentication options and focused on implementing authentication with other providers such as GitHub using the available resources and documentation provided by the respective authentication service.

### Screenshots: 

- Sign Up Page:

![signup](https://github.com/AbhradeepMukherjee/xerocodee/assets/132974862/655169c2-2c7f-4e35-a0a2-f61ef75770c3)

- Login Page:

![login](https://github.com/AbhradeepMukherjee/xerocodee/assets/132974862/71cfd91d-2bdf-405d-9b8f-afa5bd54ec65)

- Onboarding-screen-1:

![onboardingscreen1](https://github.com/AbhradeepMukherjee/xerocodee/assets/132974862/58f716cc-09f5-496f-a712-b5e3f4320d51)

- Onboarding-screen-2:

![onboardingscreen2](https://github.com/AbhradeepMukherjee/xerocodee/assets/132974862/e5db1c08-fc40-4bfe-a143-8d9d08cdbf43)

- Onboarding-screen-3:

![onboardingscreen3(1)](https://github.com/AbhradeepMukherjee/xerocodee/assets/132974862/13de1b7c-bc87-4fdc-8f59-56d865ac68fd)

![onboardingscreen3(2)](https://github.com/AbhradeepMukherjee/xerocodee/assets/132974862/cfe0e271-a889-4359-8073-e132ef5172d2)

- Landing Page:

![landing-page(1)](https://github.com/AbhradeepMukherjee/xerocodee/assets/132974862/7a9bdbe3-fd25-4cf9-9bb1-ffed25dd8987)

![landing-page(2)](https://github.com/AbhradeepMukherjee/xerocodee/assets/132974862/aa177f50-baf2-4380-be1a-41742143e7d9)






