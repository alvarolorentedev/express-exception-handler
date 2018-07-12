# ![logomakr_6nl700](https://user-images.githubusercontent.com/3071208/28988724-97dc463a-7971-11e7-9cec-ffc06bcc9205.png)
[![Build Status](https://travis-ci.org/kanekotic/express-exception-handler.svg?branch=master)](https://travis-ci.org/kanekotic/express-exception-handler)
[![Coverage Status](https://coveralls.io/repos/github/kanekotic/express-exception-handler/badge.svg?branch=master)](https://coveralls.io/github/kanekotic/express-exception-handler?branch=master)
[![npm](https://img.shields.io/npm/dt/express-exception-handler.svg)](https://github.com/kanekotic/express-exception-handler)
[![GitHub license](https://img.shields.io/github/license/kanekotic/express-exception-handler.svg)](https://github.com/kanekotic/express-exception-handler/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/kanekotic/express-exception-handler/graphs/commit-activity)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/kanekotic/)

## Motivation
This package was created to add a general way to handle exception for express application with the expectation to make it simpler to handle all possible requests.

## Installation
add it to your project with `npm install express-exception-handler` or `yarn add express-exception-handler`


## Use
there are 2 diferent ways to integrate the main functionality of this package, either by adding the handle that gets injected to the router framework

```js
var exceptionHandler = require('express-exception-handler')
exceptionHandler.handle()
const app = require('express')()
```

or by wraping manually the routes

```js
var wrap = require('express-exception-handler').wrap
router.post('/', wrap(async (req, res) => {
    ...
}))
```

it also integrates an extended class from Error that contains a `message` and a `status` that can be used to pass diferent information to the error handle

```js
var httpError = require('express-exception-handler').exception
router.post('/', async (req, res) => {
    throw new HttpError('Great Message', 400, "{Response: awesome}")
}))
```

last but not least it also contains a middleware that can be added directly to express that handles the previous named errors.

```js
var middleware = require('express-exception-handler').middleware
const app = require('express')()
app.use(middleware)
```

### Logo

Arrows graphic by <a href="http://www.flaticon.com/authors/madebyoliver">madebyoliver</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a> https://logomakr.com/6nL7006nL700