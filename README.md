# Title Pool API
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Installation

Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies.

```sh
cd title-pool
npm i
```

For start the server.

```sh
npm run dev
```

## REST API Endpoints

The server is initialized on port `3000`, so make requests to the following address
`localhost:3000` All requests must contain a header `Content-Type: application/json`

| Endpoint | Method | Description | 
| ------ | ------ | ------ |
| /auth/signup | POST | User registration |
| /auth/signin | POST | User authorization |
| /users/me | GET | Get full info about authorized user  |

### POST `/auth/signup`
| Param | Type | Required | Example |
| ------ | ------ | ------ | ------ |
| first_name | String | yes | john 
| last_name | String | yes | smith
| imbd_profile_link | String | no |
| address | String | no |
| street_address | String | no |
| street_address_2 | String | no |
| city | String | no |
| state | String | no |
| zip | String | no |
| company | String | no |
| phone_number | String | no |
| date_of_birth | Date | no | 2022-02-24
| role | Enum:  | yes | filmmaker/sales_agent/distributor/exhibitor/investor/studio
| email | String | yes | example@test.com
| password | String | yes | Pa$$w0rd!

### POST `/auth/signin`
| Param | Type | Required | Example |
| ------ | ------ | ------ | ------ |
email | String | yes ||
password | String | yes ||

### GET `/users/me`
Response for example.
`{
    "_id": "6299e111cbc6406b77024521",
    "first_name": "sdf",
    "last_name": "asdf",
    "imbd_profile_link": "",
    "address": "address",
    "street_address": "street_address",
    "street_address_2": "",
    "city": "",
    "state": "",
    "zip": "",
    "company": "",
    "phone_number": "",
    "date_of_birth": "2022-06-03T10:21:45.307Z",
    "role": "filmmaker",
    "email": "ddddd@gmail.com",
    "password": "$2b$10$zcBDeUtCbGwg9.od7bYOw.M3lTYSa2y0EG0z3sbxkXI2A2ykHvN82",
    "__v": 0
}`
## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
