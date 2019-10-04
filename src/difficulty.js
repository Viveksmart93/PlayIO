import React from 'react';
import {
    View,
    Image,
    Text,
    Button,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { getQuestions } from './Redux/action';


class Difficulty extends React.Component {

    componentDidUpdate() {
        if (this.props.questions && this.props.questions.length > 0) {
            this.props.navigation.navigate('Questions')
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={{ flex: 1, width: '80%', justifyContent: 'center' }}>

                    <Button color='#93c47d' title="EASY" onPress={() => {
                        this.props.getQues('easy')
                    }} />

                    <View style={{ margin: 20 }}></View>

                    <Button color='#1155cc' title="MEDIUM " onPress={() => {
                        this.props.getQues('medium')
                    }} />

                    <View style={{ margin: 20 }}></View>

                    <Button color='#cc0000' title="HARD " onPress={() => {
                        this.props.getQues('hard')
                    }} />

                    <View style={{ margin: 20 }}></View>

                    <Button color='#1f1f1f' title="RANDOM" onPress={() => {
                        this.props.getQues()
                    }} />

                </View>

                {this.props.loading ?
                    <View style={{ width: '100%', height: '100%', padding: 20, elevation: 3, position: 'absolute', backgroundColor: '#00000090', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <ActivityIndicator size='large' />
                    </View>
                    : null}

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

mapStateToProps = state => {
    return {
        questions: state.appData.questions,
        loading: state.appData.loading
    }
}

mapDispatchToProps = dispatch => {
    return {
        getQues: (data) => {
            dispatch(getQuestions(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Difficulty)