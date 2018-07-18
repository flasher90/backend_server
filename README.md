# noder-server-template

Simple server template start any backend project


### Run Server Locally

Make sure you have node and npm installed on your system

```
    npm start
```

Open up localhost:3000/home to load the sample route


### How to add modules

Find the module you want to use

``` 
    npm 'module-name' --save
```


### Important 

Keep code seperate to avoid over saturated code

Write code for your services in the api folder

Write code for routes in the routes folder

Do not hard code any secret key or api key

Keep those in the .env file -> check api/sample
    Create an .env in root directory and store secret keys there
