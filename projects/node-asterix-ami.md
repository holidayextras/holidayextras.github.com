---
layout: project
title: Node Asterisk AMI
tagline: An extremely lightweight Asterisk AMI connector
date: 2014-12-31 12:00:00
tags: JS
comments: true
github: https://github.com/holidayextras/node-asterisk-ami/
---

<iframe src="http://ghbtns.com/github-btn.html?user=holidayextras&repo=node-asterisk-ami&type=watch&count=true"
  allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" align="center"></iframe>

## Install

Try out the beta for version 0.2.0 and let us know what you think!

```
npm install asterisk-ami@0.2.0-beta
```

Or stick with stable


```
npm install asterisk-ami
```

##Beta

Try out the beta, the docs can be found in the branch beta - [Docs](https://github.com/holidayextras/node-asterisk-ami/tree/beta)


## Usage

```
var AsteriskAmi = require('asterisk-ami');
var ami = new AsteriskAmi( { host: 'hostname', username: 'username', password: 'secret' } );

ami.on('ami_data', function(data){
  console.log('AMI DATA', data);
  //decide between Events and non events here and what to do with them, maybe run an event emitter for the ones you care about
});

ami.connect(function(){
  ami.send({action: 'Ping'});//run a callback event when we have connected to the socket
});//connect creates a socket connection and sends the login action

ami.send({action: 'Ping'});
```

##Events

(AMI Data)
These give you AMI specific information

**ami_login** - called when logging into the ami, no data passed back<br>
**ami_data** - called for each event we get back from the AMI, with an object being returned

(net socket events)
Use these events to determine the status of the socket connection, as if the socket is disconnected, you would need to add your .on('close') events again, this was a bug in the previous version of asterisk-ami, use these new events instead which will always be called, even if the connection has died and been reconnected.

**ami_socket_drain**<br>
**ami_socket_error**<br>
**ami_socket_timeout**<br>
**ami_socket_end**<br>
**ami_socket_close**<br>
**ami_socket_unwritable**<br>



##methods

```
.connect(function(){
  console.log('connection to AMI socket successful');
}, function(raw_data){
  console.log('every time data comes back in the socket, this callback is called, useful for recording stats on data', raw_data);
})

.disconnect() //logs out of the AMI and then closes the connection, sets reconnect to false so that it wont try and reconnect

.send({action: 'Ping'}) //send an ami call, pass in a javascript object with the params you want to send the ami

.destroy() //terminates the connection to the ami socket if say disconnect fails, or you've lost connection to the ami and you're not using reconnect: true as a param

```


## Configuration options

AsteriskAmi has preset/configurable options, you can set these via an object passed in to AsteriskAmi

**port** - port number for Asterisk AMI, default `5038`<br>
**host** - host of Asterisk, default `localhost`<br>
**username** - username of Asterisk AMI user, default: `username`<br>
**password**: - password of Asterisk AMI user, default: `password`<br>
**debug** - do you want debugging output to the screen, default: `false`<br>
**reconnect** - do you want the ami to reconnect if the connection is dropped, default: `false`<br>
**reconnect_after** - how long to wait to reconnect, in miliseconds, default: `3000`<br>
**events** - do we want to recieve AMI events, default: `true`<br>


