import { Pressable, Text, View } from 'react-native';
import React from 'react'
import { connect } from 'react-redux'
import increment from './redux/action';

const Counter = ({count, increment}) => {
    return (
        <View style={{flex:1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is a text {count}</Text>
            <Pressable style={{
                width: 100,
                height: 100,
                backgroundColor: 'pink',
                alignItems: 'center',
                justifyContent: 'center'
            }} onPress={increment}>+</Pressable>
        </View>
    )
}
var mapStateToProps = (state) => ({
    count: state.count
})
var mapDispatchToProps = (dispatch) => ({
    increment: ()=>{dispatch(increment)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

