import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import configureStore from './Redux/store';
import Home from './home';
import Difficulty from './difficulty';
import Questions from './questions';
import Result from './result';

const AppStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                header: null
            })
        },
        Difficulty: {
            screen: Difficulty,
            navigationOptions: () => ({
                header: null
            })
        },
        Questions: {
            screen: Questions,
            navigationOptions: () => ({
                header: null
            })
        },
        Result: {
            screen: Result,
            navigationOptions: () => ({
                header: null
            })
        },

    },
    {
        initialRouteName: 'Home'
    }
)

const AppContainer = createAppContainer(AppStack)

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
