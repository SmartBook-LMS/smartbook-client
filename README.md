This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running Locally

Follow these instructions in order to run the app locally

1. After cloning the smartbook-client repository, navigate to the root directory
2. Run `npm install` to download any required dependencies
   * Make sure to install Node and npm as it is the package manger we are using: https://nodejs.org/en/
3. Run `npm start` to startup and node server that runs the app locally
4. Any changes made to the code while the node server is live will sync automatically and display in the browser

## Building and Deploying

Follow these instructions in order to build and deploy the app

1. Run `npm run build` in the root directory of smartbook-client, which will create a 'build' folder
2. Once the build succeeds, navigate to https://console.cloud.google.com/storage/browser?project=smartbook-lms
3. Select 'smartbook-client-build' and click 'Upload Folder' and select the newly created 'build' folder
4. Once uploaded, from this page, open the Cloud Shell by click on the Cloud Shell icon in the top app bar
5. Run `gsutil rsync -r gs://smartbook-client-build ./smartbook-client` in the Cloud Shell 
6. Once the command has finished, run `cd smartbook-client/` and then `gcloud app deploy`
   * If prompted select 'Y' when asked to continue
7. After deployment, the site should be live at https://smartbook-lms.uc.r.appspot.com
   * Run `gcloud app browse` if the above link does not work to get the updated URL


## Available Scripts

Below are more detailed explanation on npm commands

### `npm install react-scripts --save`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

