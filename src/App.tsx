import React from 'react';
import Router from './router/router';

//for theme
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

//for state managment
import { Provider } from 'react-redux';
import store from './store/index';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
