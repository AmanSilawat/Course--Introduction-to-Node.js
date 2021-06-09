# Course--Introduction-to-Node.js
## What is NodeJs
Node JS is a server-side JavaScript language. Port of chrome V8 engin to desktop. NodeJs does have a dependance manager. make a run time environment for JavaScript outside of the browser.
- Open source runtime
	- if you writing code in bash. you are in a base runtime
	- if you writing code in ruby. you are in a ruby runtime.
	- mean: it's own environment and that self-encapsulated.
- Built on chrome's V88 JavaScript engine
	- V8 engine compile JavaScript code and convert to matchin code and matchin is read the code.
	- other browser specific JS engine
		- SpiderMonkey: Mozilla JavaScript
		- Webkit: Safari
		- Chakra: Internet Explorer
		- V8 : Google
- Node js is created by Ryan Dahl in 2009.

## What can i create with NodeJs
Any think can do with JavaScript. like 
- Tooling (build, automation, etc)
	- like, automate deployment, version.
- API's (REST, Realtime, etc)
	- like - REST APIs AND GraphQL APIs, realtime API like web sockets.
	- Node high concurrency because of its event loop architecture.
- CDNs
	- Mean: some assets are delivered to your customers as fast as possible.
- Shareable libraries
	- The community is big. People Create libraries and modules and share them with people.
- Desktop applications
	- Use Electrons, SWJS and etc. to make desktop application
- IOT (Internet of things)
	- so many frameworks for IOT devices and the JavaScript Robotics & IoT Platform
		- [Johnny-Five](http://johnny-five.io/)
		- [RaspBerry Pi](https://www.raspberrypi.org/)
- Pretty much anything because node is on everything now


## Installing NodeJs

### From NodeJs Source
- this is a easiest way to install nodejs. limits: many version of nodejs available, one root place in your computer and can not put another version only manually do this work. Can caues permission errors.

### Using NVM (node version manager)
Recommended. allows you to run many versions of node whenever and doesn't mess up permissions. 


## Running Nodejs code
How to evaluate your JavaScript file in terminal. Two way to evaluate the code.

### Interactive REPL (Read Evaluate Print Loop)
The **REPL** feature of Node is very useful in experimenting with Node.js codes and to debug JavaScript codes.

- **Read** - Read user's input, parse the input into JavaScript, and store in memory.
- **Evaluate** - Takes and evaluate the data structure
- **Print** - Print the result.
- **Loop** - Loops the above command until the user presses ctrl-c twice.

<br />

For Example :
- Like browser console
- Just type the node command with no argument
Like this in terminal: 

```
$ node
> var name = 'Aman Silawat';
undefined
> name
'Aman Silawat'
> 
````

### CLI Executable
Execute your node app

```
$ node path/file-name.js
```

## Installing Node.js from the source
- install Nodejs thorough official site: [nodejs.org](https://nodejs.org/en/download/)
- Select your platform and node version. like windows, macOS
	- LTS version mean: life time support
	- Current version mean: no life time support

## Installing Node.js with NVM
Node js created by some foundation or some paid company. NodeJs is open source [git source](https://github.com/nvm-sh/nvm#installing-and-updating)

## First Exercise

create a file `code.js`
```js
console.log('hello NodeJs');
```

Code run in `terminal`
```
$ node code.js
hello NodeJs
```

---
## Node.js Modules
### Browser vs Nodejs
|Browser				|Nodejs						|Description													|
|:--					|:--						|:-														|
|Build Interactive apps for the web	|Build server side apps and scripts		|make visual things in chrome but in not no visual graphical thing						|
|DOM					|Nope, no GUI (can virtualize: fake DOM)	|In browser Combination of HTML, CSS, JavaScript and rendering the DOM OR CSSOM					|
|Window					|No window, but does have a global		|In browser fetch, alert, location and history but in Nodejs have another global				|
|Fragmentation				|Versioned, so no fragmentation			|Diffrent browser and diffrent specification. In browser [Can i use](https://caniuse.com/)				|
|optional modules (es6)			|Required modules (commonjs +)			|[ECMAScript 6](https://262.ecma-international.org/6.0/), [CommonJs](https://requirejs.org/docs/commonjs.html)	|
|Cannot access filesystem		|Can access filesystem				|Browser doesn't use filesystem For security risk but in Nodejs use filesystem.					|
|Async					|Async						|Both async													|
|					|No browser based APIs				|No browser based APIs in NodeJs.										|

### Node.js core Module
Consider modules to be the same as JavaScript Libraries. A set of functions you want to include in your application.

Node.js has a set of build-in modules which you can use without any further installation.
some core modules (built-in)
- fs
- path
- zlib
- http
- assert
- buffer

### Globals
Browser create your own global.

- **process** - has information about the environment the program is running in
	```
	$ console.log(process)
	```

	I will get this creazy object
	```
	process {
		version: 'v15.3.0',
		versions: {
			node: '15.3.0',
			v8: '8.6.395.17-node.22',
			uv: '1.40.0',
			zlib: '1.2.11',
			brotli: '1.0.9',
			ares: '1.16.1',
			modules: '88',
			nghttp2: '1.41.0',
			napi: '7',
			llhttp: '2.1.3',
			openssl: '1.1.1g',
			cldr: '37.0',
			icu: '67.1',
			tz: '2020a',
			unicode: '13.0'
		},
		arch: 'x64',
		//..
	//..
	}
	```
	Get all the information about the process. So it includes things about the machine, cores, name, path and location,  environment verables and etc.


- **require** - function to find and use modules in current module
	NodeJs uses commanJS. It is a module pattern. Get file or a function and some other stuff through module.

- **__dirname** - the current directory path.

	Use `__dirname` like this create a file in `code.js`
	```
	console.log(__dirname);
	```

	Run the `code.js` file in your terminal.
	```
	$ node code.js
	/home/aman/frontend/Course--Introduction-to-Node.js
	```

- **module** - information about current module, methods or making module consumable
	Every code or file in NodeJs is a module. this feature is by default in NodeJs

	For Example 
	```
	$ node
	> console.log(module)
	Module {
	id: '<repl>',
	path: '.',
	exports: {},
	filename: null,
	loaded: false,
	children: [],
	paths: [
		'/home/aman_silawat/frontend/Course--Introduction-to-Node.js/repl/node_modules',
		'/home/aman_silawat/frontend/Course--Introduction-to-Node.js/node_modules',
		'/home/aman_silawat/frontend/node_modules',
		'/home/aman_silawat/node_modules',
		'/home/node_modules',
		'/node_modules',
		'/home/aman_silawat/.node_modules',
		'/home/aman_silawat/.node_libraries',
		'/usr/local/lib/node'
	]
	}
	```

- **global** - like window, its the "global" object. Almost NEVER use this.
	when use the global?
	We should use global only to test the code other never use the global.






### What are modules?

Module like encapsulated code. A module is a separate unit. Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope, each module can be placed in a separate .js file under a separate folder.

```
var module1 = (function(exports, require, module, __filename, __dirname){
  // your node js code in a file
})

var module2 = (function(exports, require, module, __filename, __dirname){
  // your node js code in another file
}) 
```
This course is written by node.js. only five parameter use in this function because these parameter value pass in function with different value.


### Modules in Nodejs

- NodeJs uses commonJs for its module system.
- As the author, you decide how and what to expose from your modules, to other modules.


```js
const add = (num, num2) => {
	//..
}
const notPublic = () => {}
module.exports = add
```
Which value must be returned in the model. `notPublic` functions are a private function, it does not expose this function.

Use many patter in `module.export`. this called name exports.
```js
module.exports = {add(){}, think(){}, value: 1}
```

Export only on thing. This called default export.
```js
const add = (num, num2) => {}
module.exports = add
```

Export is very helpful for **performance** reasons like tree shaking. The dependency tree to figure out what to bundle in your app and what not bundled. Developer is understand, what dependency public and what dependency private.

Add another property in **module**
```js
module.export = {value: 1}
module.export.more = {value2: 10}
```

### Using modules

- The Nodejs runtime injects another global, require.
- This function takes a relative path to the module that you want to consume, and synchronously loads it by returning whatever the target module exported.

#### Example:
[default export module](https://github.com/AmanSilawat/Course--Introduction-to-Node.js/tree/master/module/import-node-module/default-exports)
[name export module](https://github.com/AmanSilawat/Course--Introduction-to-Node.js/tree/master/module/import-node-module/name-exports)


### Exercise
Convert browser code to node js **frontendmasters** [Convert Browser JavaScript Exercise](https://frontendmasters.com/courses/node-js/convert-browser-javascript-exercise/)

The three files inside the browser folder are to be converted into node js. Exercise code: [In my ripo](https://github.com/AmanSilawat/Course--Introduction-to-Node.js/tree/master/exercises/modules)

**How to test your code** in terminal
```
$ npm install npm jest
$ npx jest
PASS  ./test.js
  data
    ✓ users (2 ms)
    ✓ posts
  api
    ✓ getUserById (151 ms)
    ✓ getPostsForUser (152 ms)
  app
    ✓ showPostsForCurrentUser (152 ms)
    ✓ showUserProfile (151 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.921 s
Ran all test suites.
```

## Internal Modules(Shipped Modules) & npm

node.js has some internal modules

- fs - fileSystem module to interacting with files on a machine
	```js
	const fs = require('fs');
	```
	Use only without `./fs`. Mean, this is my module and only use `fs` than this is a internal or remote module.

	Create a file `read.js`.
	```js
	const fs = require('fs');

	const file = fs.readFileSync('./demo-text.txt', { encoding: 'utf-8' })
		.toString();

	console.log(file);
	```

	Run in terminal
	```
	$ node read.js
	Hello this is only demo file.
	```
	
- http - low level-ish module for creating network based programs, like APIs
- path - useful for manipulating path strings and handling differences across many OS's

	```
	const path = require('path');
	console.log(path.join('../../hello', 'app/', '../things'));
	```

### Remote Modules
Download and use other modules from the internets. ability to share module. In remote modules now you have to be aware of malicious code.

### Modules Recap

three type of modules.
1. Created by user or custom local modules.
	```js
	const lib = require('./main'); // Always have to use a "." first
	```
2. Internal module or Shipped modules.
	```js
	var fs = require('fs') // internal module, remote module with same name takes it
	```
3. Remote module.
	```js
	const lib = require('lib'); // the same name you used to install it with npm
	```


### NPM 
CLI to manage remote modules.

which NPM is installed in your system check it. like: npm, nvm and other.
```
$ which npm
/usr/local/bin/npm
```

Check NPM version
```
$ npm --version
// or
$ npm -v
7.0.14
```

Install lodash in NPM
```
$ npm install lodash
// or
$ npm i lodash
```


- publish, download, and update modules
- Uses package.json file in your NodeJs project to determine dependencies
Stores remote modules in the node_modules folder

### yarn
yarn is same like npm. yarn is made by facebook

Install lodash in yarn
```
$ yarn add lodash
```


### CLI with Node Solution

```json
"dependency": {
	"lodash": "^4.17.11"
}
```
Packages follow symver, first number is a major changes, the second number is fix bug and third number is small changes.

"patch, minor, major"
"^4.17.11"


```
$ process.argv
```

This `process.argv` return a array. First value of this index is node path, send value is current file path, and third and more are the passed in that order.

for example like this.
```
$ node example.js list filename
```


## Asynchronous Node

### Asynchronous Code in Node.js

NodeJs is single Threaded and event based.

### Asynchronous Patterns

callback pattern
```
// callback takes error as first arg, and result as second
doAsyncThing((error, result) => {})
```


promises
```
doAsyncThing()
  .then(result => {})
  .catch(error => {})
```


async / await
```
const run = async () => {
  const results = await doAsyncThing() // must return a promise
  console.log('hello')
}
```

**fs.readFile** asynchronous function
```js
fs.readFile("read.txt", "UTF-8", (err, result) => {
	console.log('file is created');
	console.log('err: ', err);
	console.log('result: ', result);
})
```


### Servers

A server job is handle a request from some one of the client like browser, mobile  etc. One Server handle multiple client requests. 

### Exercise

Questions will be found in the [slide](https://slides.com/scotups/deck/fullscreen#/22/0/4) of Scott Moss
You'll be refactoring and fixing a simple static asset server. The server uses blocking sync code and crashes whenever a request comes in that is asking for an asset that is not found. Neither of those are desirable. You'll also have to teach the server how to server the assets it has in the assets folder.

Answer in my git [here](https://github.com/AmanSilawat/Course--Introduction-to-Node.js/tree/master/exercises/api)

Go to `exercises/api` directory and run in terminal.
```
$ node server.js
Server running at http://127.0.0.1:3000/
GET / 200
GET /style.css 200
GET /favicon.ico 404
GET /style.css 200
```



## Debugging & Testing

- We can debugging through the console.
- user inspector
	Start server with debugging mode.
	```
	$ node --inspect server.js
	```

	In chrome search bar you have to type `chrome://inspect` and Click the 'Inspect' link on the remote target.

- text editor integration feature.


### Type of test

- unit test
- integrated test: what api call
- end-to-end : 
- ui
- snapshot
- jperformance



### Exercise

You have to debug and track down some issues in a small app. Use your logging and inspector to find them. Try and fix them, once you do, write some test to make sure it stays fixed.

Goto the `exercises/testing` directory [on my ripo](https://github.com/AmanSilawat/Course--Introduction-to-Node.js/tree/master/exercises/testing)


Install some NPM packages
```
$ npm i npm i morgan body-parser express
```

**How to test your code** in terminal
```
$ npm install npm jest
$ npx jest
PASS  ./test.js
  users
    fixId
      ✓ convert param id to db id (3 ms)
    findUser
      ✓ finds user by id if user is there
    deletUser
      ✓ deletes user with id if user is there (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.881 s
Ran all test suites.
```

## Sharing module

Push code to github, publish to NPM.


## Module export function
Under the hood, NodeJS does not run our code directly, it wraps up code inside a function before execution.

NodeJS wraps function wrapper structure:
```js
(function (exports, require, module, __filename, __dirname) {
  //module code
});
```

## create server using http npm package

```js
const http = require('http');

const server = http.createServer((req, res) => {
	req.end('Hello this a node server');
})

// listen the request
server.listen(8000, '127.0.0.1', () => {
	console.log('listening to the prot no. 8000')
})
```

`http` is a Node.js core module. the `req` request  object can be used to get information about the current HTTP request. e.g. url, request header, and data.

`res` response object can be used to send a response for a current request.

## set routing

```js
const http = require('http');

const server = http.createServer((req, res) => {
	// create home page route
	if(req.url == '/') {
		req.end('This is a HomePage.');
	}
	// create another route
	else if(req.url == '/product') {
		req.write('This is a ProductPage.');
		req.end();
	}

	// for other all route
	else {
		req.writeHead(404, {'Content-Type': 'text/html'})
		req.end('Oops page not found.')
	}
})

// listen the request
server.listen(8000, '127.0.0.1', () => {
	console.log('listening to the prot no. 8000')
})
```


## JSON
json stands from JavaScript Object Notation. json is a lightweight format for sorting and transporting data. json is used when data is spend from a server to a web page.


## API
API is the acronym for application Programing Interface, which is a software intermediary that allows two application to talk to each other. Each time you use an app like Facebook, send an instant message, or check weather on you phone, you are using an API.

API like a service which allows us to request a data.


## Event Module
emitter objects emit named events that cause previously registered listeners to be called.

basically has two main features:
- Emitting name events.
- Registering and un-registering listener function.

```js
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('sayMyName', () => {
	console.log('your name is a')
});

event.on('sayMyName', () => {
	console.log('your name is b')
});

event.on('sayMyName', () => {
	console.log('your name is c')
});

event.emit('sayMyName); 
```

<br />

pass parameters in emitter events
```js
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('check', (statusCode, msg) => {
	console.log(`status code is ${statusCode} and msg : ${msg}`)
});

event.emit('check', 200, 'ok')
```

## Stream
Streams are one of the fundamental concepts of Node.js. Streams are a type of data-handling methods and are used to read or write input into output sequentially. Streams are used to handle reading/writing files or exchanging information in an efficient way.

Streaming mean listening to music or watching video in real time, instead of downloading a file to your computer and watching it later.

- Readable - Stream which is used for read operation.
- Writable - Stream which is used for write operation.
- duplex - Stream which can be used bor both read and write operation.
- Transform - A type of duplex stream where the output is computed based on input.

<br />

Each type of Steam is an EventEmitter instance and throws serval events at different instance of times. For ex., some of the commonly used events are...
data - This event is fired when there is data is available to read.
end - This event is fired when there is no more data to read.
error - This event is fired when there is any error receiving or writing data.
finish - This event is fired when all the data has been flushed to underling system. 

<br />

Example of `createReadStream` 
```js
const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on()

server.on('request', (req, res) => {
    // Reading from a stream
    // Create a readable stream
    // Handle stream events -> data, end, error
    const rStream = fs.createReadStream('./stream.js');
    rStream.on('data', (chunk) => {
        res.write(chunk);
    })
    rStream.on('error', (err) => {
        console.log(err)
    });
    rStream.on('end', () => {
        res.end();
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log('http://127.0.0.1:3000')
});
```

<br />

## stream.pipe()

This method used to take a readable stream and connect it to a writeable stream.

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    const rStream = fs.createReadStream('./stream.pipe.js');
    rStream.pipe(res);
});

server.listen(3000, '127.0.0.1', () => {
    console.log('http://127.0.0.1:3000')
});
```

## ExpressJs
Express.js is a node.js framework. it's the most popular framework as of now (the most starred on NPM).

ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends.

### why do need Express.js
Try to write a small REST API server in plain Node.js (that is, using only core modules) and then in Express.js. The latter will you 5-10x less time and lines of code.


`req` and `res` parameter in the get method.
```js
const express = require('express');
const app = express();
app.get('/', (req, res) => { //.. })
```
The callback function has 2 parameters, request(req) and response(res). The request object(req) represents the HTTP request and has properties the request query string, parameters, body, HTTP headers, etc.

Similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.



### body-parser
To handle http POST request in Express.js version 4 and above, you need to install middleware module called body-parser

body-parser extract the entire body portion of an incoming request stream and expose it on req.body.

This body-parser module parse the JSON, buffer, string and URL encoded data submitted using HTTP POST request.


```js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.post('/user-form', (req, res) => {
	res.end(req.body);
})
```

### Template engine
A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

Popular template engines
- [Pug](https://pugjs.org/api/getting-started.html)
- [Mustache](https://www.npmjs.com/package/mustache)
- [EJS](https://www.npmjs.com/package/ejs)
- [HBS](https://handlebarsjs.com/)
