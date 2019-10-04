import React from 'react';
import {
    View,
    Image,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';


class Home extends React.Component{
    
    render(){
        return(
            <View style={style.container}>
                <View style={style.container}>
                <Text style={{fontSize:20}}>Welcome To The PlayIO</Text>
                </View>
                <View style={style.container}>
                <Text style={{fontSize:20}}>Your Last Score</Text>
                <Text style={{fontSize:25,fontWeight:'bold'}}>{this.props.lastScore}</Text>
                </View>
                <View style={style.container}>
                <Button title="Play" onPress={()=>{
                    this.props.navigation.navigate('Difficulty')
                }}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    }
});

mapStateToProps = state => {
    return {
        lastScore: state.appData.lastScore
    }
}

export default connect(mapStateToProps,null)(Home)