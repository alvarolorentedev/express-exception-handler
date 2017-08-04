# ![logomakr_6nl700](https://user-images.githubusercontent.com/3071208/28988724-97dc463a-7971-11e7-9cec-ffc06bcc9205.png)

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
router.post('/', wrap(async (req, res) => {
    throw new HttpError('Great Message', 400)
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