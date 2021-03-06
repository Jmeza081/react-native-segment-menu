# react-native-segment-menu

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[npm version]
![](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)

## Features

-   Cross-platform
-   Javascript only
-   Fully Customizable
-   Animated via `react-native-animatable` as a peer-dependency

## Demo

| iOS                                                                                                                  | Android                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![ios_example](https://user-images.githubusercontent.com/16481834/50187198-fa7ef700-02e2-11e9-8689-bd9de08eff78.gif) | ![android_example](https://user-images.githubusercontent.com/16481834/50191240-95330200-02f2-11e9-87df-1b1bdbc9470d.gif) |

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

_Looking for the code to the demo provided?_ See the `example/` directory for the source code.

## Prop Types

| Name        | Type   | Description                           | Default Value |
| ----------- | ------ | ------------------------------------- | ------------- |
| `valueName` | `bool` | A Boolean Value which dictates x or y | `true`        |

## FAQ

**How do I do x?**

[Answer to question]

## Setting Up Development Environment

Due to a long standing issue react-native's move to Metro bundler, the following work around is necessary to test this package locally. You can read more about the underlying issue from ([here](https://github.com/facebook/metro/issues/1#issuecomment-328140399)).

1. `yarn link` within the dev npm project root directory.
2. `yarn link react-native-segment-menu` within the example root directory.
3. `yarn start-dev` to start packager with custom config

## Contributing

[Link to Guidelines]
