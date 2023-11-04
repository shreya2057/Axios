# Firebase, React and axios

Firebase is a comprehensive platform developed by Google that provides a wide array of services for building web and mobile applications. It offers Realtime Database, Firestore, Authentication etc.

Axios is a popular JavaScript library that enables you to make HTTP requests from browsers. It provides a simple and intuitive way to interact with APIs and perform various HTTP requests.

## Connecting Firebase to React

### Creating Firebase project

<li>Go to firebase console and click on add project.</li>
<li>(Step1 of 3) Add the project name and click on continue.</li>
<li>(Step2 of 3) Disable Google Analytics for this project and click on continue.</li>
<li>After the project is ready, click on continue</li>
<li>Go to Build(Sidebar) and create Realtime database</li>
<li>While setting up database, in security rules, select Test mode</li>


### Base URL

<li>The Data section consists of URL that is used in Axios</li>

### Install axios

```
npm install axios
```

## Contents

<li>Create operation</li>
<li>Read operation</li>
<li>Update operation</li>
<li>Delete operation</li>

## Axios vs Fetch API

<li>Axios offers a simpler syntax and a clean interface for making HTTP requests. </li>

<li>The response of Axios is easier to understand.</li>

<li>Both Axios and Fetch use Promises.</li> 

<li>Axios allows interceptors that can be set globally or per request.</li>

<li>Axios can automatically detect HTTP error status codes and throw errors.</li>