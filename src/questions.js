import React from 'react';
import {
    View,
    Image,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { connect } from 'react-redux';
import { setCurrentScore } from './Redux/action';


class Questions extends React.Component {

    getOptions = (question) => {

        var radio_props = [];
        if (question) {
            if (question.type === 'multiple') {
                var option = [...question.incorrect_answers, question.correct_answer];
                option.sort(() => Math.random() - 0.5);
                option.map(item => {
                    radio_props.push({ label: item, value: item });
                })
            } else {
                radio_props = [
                    { label: 'True', value: 'True' },
                    { label: 'False', value: 'False' }
                ];
            }
        }
        return radio_props;
    }

    getDifficulty = (value) => {
        if (value === "easy") {
            return (
                <Text style={{ fontSize: 20, color: '#93c47d' }}>__</Text>
            );
        }
        else if (value === "medium") {
            return (
                <Text style={{ fontSize: 20, color: '#1155cc' }}>__ __</Text>
            );
        }
        else if (value === "hard") {
            return (
                <Text style={{ fontSize: 20, color: '#cc0000' }}>__ __ __</Text>
            );
        }
    }

    render() {
        const question = this.props.questions[this.props.index]
        var choice = ''
        return (
            <View style={style.container}>

                <View style={{ flex: 1, width: '80%' }}>
                    <Text style={{ fontSize: 20 }}>{question ? question.question : ''}</Text>

                    {this.getDifficulty(question ? question.difficulty : '')}

                    <RadioForm
                        ref={radio => { this.radioForm = radio }}
                        radio_props={this.getOptions(question)}
                        initial={-1}
                        onPress={(value) => { choice = value }}
                        radioStyle={{ margin: 20 }}
                    />
                </View>

                <Button title={this.props.index < 9 ? 'Next' : 'Submit'} onPress={() => {
                    this.radioForm.clearSelection();
                    if (question.correct_answer === choice) {
                        var data = {
                            score: this.props.score + 1,
                            index: this.props.index + 1
                        }
                        this.props.setScore(data);
                    } else {
                        var data = {
                            score: this.props.score,
                            index: this.props.index + 1
                        }
                        this.props.setScore(data);
                    }
                    if (this.props.index < 9) { }
                    else {
                        this.props.navigation.navigate('Result')
                    }
                }} />

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    }
});

mapStateToProps = state => {
    return {
        questions: state.appData.questions,
        index: state.appData.quesIndex,
        score: state.appData.currentScore
    }
}

mapDispatchToProps = dispatch => {
    return {
        setScore: (data) => {
            dispatch(setCurrentScore(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)