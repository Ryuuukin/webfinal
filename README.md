MIKROKOSMOS

--------------------------------------
User Registration
User Login
Authorization
REST API
APIs
Sending a message with Nodemailer
Project Organization and Design
project Plan:
User Registration:

Verify that the registration page allows users to sign up by providing necessary information.
Check that passwords are hashed using bcrypt before storing in the database.
Ensure that usernames are unique to prevent conflicts.
User Login:

Confirm that the login page allows users to input their credentials.
Validate that hashed passwords are retrieved from the database and compared using bcrypt.
Test redirection to the main page upon successful authentication.
Authorization:

Ensure that user roles ('admin' or 'regular user') are defined and stored in the database.
Verify that authorization checks are implemented on routes requiring specific permissions.
Test route access based on user roles.
REST API:

Test functionality for admins to add, edit, and delete items related to the portfolio.
Verify that items are displayed on the main page with carousel images, names, and descriptions.
Confirm timestamps for creation, update, and deletion.
APIs:

Test three different pages displaying visually appealing charts or graphs using data from APIs.
Ensure interactivity and informative insights in the visualizations.
Check for replacement of APIs if previously focused on mapping, weather, or geolocation.
Sending a Message with Nodemailer:

Verify that welcome messages are sent after registration.
Test notifications for actions on the website.
Project Organization and Design:

Check for clean code, well-documented, and organized project structure.
Confirm adherence to best practices for coding.
Test responsiveness and user interface design with thoughtful elements using EJS.
Test Environment:
The project will be tested in a development environment with the following configurations:

Server running on port 3000.
MongoDB accessible from any location.
Dependencies listed in package.json installed.
Test Execution:
The test cases will be executed manually by interacting with the project's user interface and API endpoints. Automated testing tools may be used where applicable.

Test Completion Criteria:
The project will be considered successfully tested if it meets all specified requirements, functionalities work as expected without errors, and the user interface is visually appealing and responsive.
