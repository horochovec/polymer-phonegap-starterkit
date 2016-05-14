# What is this project? 

The purpose of this repository is to provide a project structure and tasks for the development environment of a project using Apache Cordova + Polymer

```bash
git clone https://github.com/horochovec/polymer-phonegap-starterkit.git
```

# Structure
- polymer-phonegap-starterkit (root folder)
  * source/ (Used for the source files of project)
  * mobile/ (Used to Apache Cordova Project)
  * crosswalk/ (Used to Apache Cordova Project with Crosswalk Project)

# Steps to configure:

```bash
cd polymer-phonegap-starterkit
```

```bash
npm install -g bower
```

```bash
npm install -g gulp
```

```bash
npm install -g cordova
```

```bash
bower install
```

```bash
npm install
```

```bash
cordova create mobile [YOUR-DOMAIN] [PROJECT-NAME]
```

```bash
cordova create crosswalk [YOUR-DOMAIN] [PROJECT-NAME]
```

```bash
cd mobile
cordova platform add ios --save
cordova platform add android --save
```

```bash
cd crosswalk
cordova platform add android --save
cordova plugin add cordova-plugin-crosswalk-webview --save
```

# Steps to build this project

- At index.html, uncomment the script import to cordova.js;
- At index.html, uncomment the link import to vulcanize/vulcanize.html;
- At index.html, comment the link import to imports.html;

```bash
cd source
gulp vulcanize
gulp production
gulp mobile
gulp crosswalk
```

# Steps to work in this project

- At index.html, comment the script import to cordova.js;
- At index.html, comment the link import to vulcanize/vulcanize.html;
- At index.html, uncomment the link import to imports.html;

```bash
cd source
gulp dev
```