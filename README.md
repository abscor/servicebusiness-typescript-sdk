# Project Overview

We are looking for a skilled developer to design and build an Ionic mobile app that is ready for deployment on both iOS and Android platforms. The app will include an authentication process and feature 7 forms and list views. The backend for the app is already deployed and utilizes GraphQL. It provides an API SDK in TypeScript, which contains all the necessary functions required to complete the project. Additionally, there may be a need to create custom components, such as color representation within the form view.

## Technical Details:

### Code quality and submission

You will be granted access to a pre-existing shared repository for code submission.
Upon completing a milestone, please submit your code to the repository for review and approval.
Ensure that the code you submit is clean, readable, and fully functional.

### SDK and backend service:

Refer to the example client at GitHub Example.
Utilize the TypeScript SDK available at GitHub SDK. https://github.com/abscor/servicebusiness-typescript-sdk/blob/main/src/sdk.ts

### UI Guidelines

The overall app UI should closely follow the provided screenshot examples.
The screenshots currently available cover aspects of the authentication process, profiles, and the Website section.
The Website section functionality includes:
Displaying a list of websites.
Allowing users to create new websites.
Enabling the selection of an active website.
Providing a website editor.

Incorporating tabs to break long forms into manageable sections. You will decide how to break the form into tabs, as well as the name for each tab.

The specific fields for each section or type can be found in the provided SDK as TypeScript types.
Form Inputs and Functionality:

Some UI elements cannot be represented using 'input type="text"'. You may need to design custom UI components. i.e. theme-colors which needs to be a palette of colors. Another example is file uploading, specifically for images. Please ensure to display a preview of the image using base64, and set the value of the field to be base64 where the server will process the base64 encoded image and return a URL to a hosted file in return. See the example in the example-client app. 

Successful form submissions should trigger a green "Success" Toast component.
Failed form submissions should trigger a red "Failure" Toast component.

### Sections (Types)

In addition to the provided screenshots for managing the Website(s) section and forms, and the authentication and profile views, there are additional sections, including:

- Services
- Locations
- Reviews
- Articles
- FAQs (Questions and Answers)

### Bug Handling

While we understand that bugs may occasionally arise, we expect you to promptly address and fix any bugs to ensure a flawless user experience, in accordance with the project requirements.

Feel free to reach out to me for clarifications.