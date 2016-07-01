import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const App = React.createClass({
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <AppBar title="HELLO,MGS~" />
            </MuiThemeProvider>
        );
    }
});

export default App;
