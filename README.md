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

### Globals
Browser create your own global.

**process** - has information about the environment the program is running in
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

**require** - function to find and use modules in current module
NodeJs uses commanJS. It is a module pattern. Get file or a function and some other stuff through module.

**__dirname** - the current directory path.

Use `__dirname` like this create a file in `code.js`
```
console.log(__dirname);
```

Run the `code.js` file in your terminal.
```
$ node code.js
/home/aman/frontend/Course--Introduction-to-Node.js
```

**module** - information about current module, methods or making module consumable
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

**global** - like window, its the "global" object. Almost NEVER use this.
when use the global?
We should use global only to test the code other never use the global.


