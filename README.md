# react-native-segment-menu

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[npm version]
![](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)

## Features

-   Cross-platform
-   Javascript only
-   Fully Customizable
-   Animated via `react-native-animatable` as peer-dependency

## Demo

[2 gifs, one iOS on Android provided here]

## Installation

```
npm install packageName
```

or

```
yarn add packageName
```

## Usage

```
[Code Sample of basic usage]
```

_Looking for code to the demo provided?_ See the `example/` directory for the source code.

## Prop Types

| Name        | Type   | Description                           | Default Value |
| ----------- | ------ | ------------------------------------- | ------------- |
| `valueName` | `bool` | A Boolean Value which dictates x or y | `true`        |

## FAQ

**How do I do x?**

[Answer to question]

## Setting Up Development Environment

Due to the long standing issue react-native's move to Metro bundler which doesnt support locally linked npm packages, the following work around is as follows (from [here](https://github.com/facebook/metro/issues/1#issuecomment-328140399)):

1. `yarn link` within the dev npm project root directory.
2. `yarn link react-native-segment-menu` within the example root directory.
3. `yarn start-dev` to start packager with custom config

## Contributing

[Link to Guidelines]
