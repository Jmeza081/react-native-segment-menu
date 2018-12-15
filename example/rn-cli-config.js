var path = require('path');
var config = {
    getProjectRoots() {
        return [
            // Keep your project directory.
            path.resolve(__dirname),

            // Include your forked package as a new root.
            path.resolve(__dirname, '..'),
        ];
    },
    extraNodeModules: {
        // Add extra node modules needed by local package to be used for development
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-native': path.resolve(__dirname, 'node_modules/react-native'),
        'react-native-animatable': path.resolve(
            __dirname,
            'node_modules/react-native-animatable',
        ),
    },
};
module.exports = config;
