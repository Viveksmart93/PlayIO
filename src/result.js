import React from 'react';
import {
    View,
    Image,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { setLastScore } from './Redux/action';


class Result extends React.Component {

    constructor(props) {
        super(props)
        this.props.setScore(this.props.currentScore)
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.container}>
                    <Text style={{fontSize:20}}>Congratulation for successfull completion !!!</Text>
                </View>

                <View style={style.container}>
                    <Text style={{fontSize:20}}>Your Score</Text>

                    <Text style={{fontSize:25,fontWeight:'bold'}}>{this.props.lastScore}</Text>
                </View>

                <View style={style.container}>
                    <Button title="Play Again" onPress={() => {
                        this.props.navigation.navigate('Difficulty')
                    }} />
                </View>

                <View style={style.container}>
                    <Button title="Back To Home" onPress={() => {
                        this.props.navigation.navigate('Home')
                    }} />
                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
});

mapStateToProps = state => {
    return {
        lastScore: state.appData.lastScore,
        currentScore: state.appData.currentScore
    }
}

mapDispatchToProps = dispatch => {
    return {
        setScore: (data) => {
            dispatch(setLastScore(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)