# Easy Music (In progress)

It's a small application to test Ionic Framework. For the moment the features developed are :
* Search tracks on Spotify.
* Get details on a album.
* Display the events around your location on a map. The events are provided by Songkick API.

# Install the projet

In the easy-music directory :

```bash
$ sudo npm install -g ionic cordova
$ npm install
$ bower install
```

# Run the project

Run the project in the browser :
* Browser view :
```bash
$ ionic serve
```
* Mobile view :
```bash
$ ionic serve --lab
```

Run the project in a emulator (IOS) :
```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```
You can run also on a Android emulator with android parameter in the command lines.