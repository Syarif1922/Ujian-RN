import React from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity,ScrollView, Image, CheckBox, ImageBackground} from 'react-native'


class Todo extends React.Component{
    state={
        text:'',
        list:[],
        love: true,
        checked: false
        
    }
    create() {
        if( this. state.text == '') {
            alert(" Input tidak boleh kosong")
        }else {
            this.state.list.push(this.state.text)
            this.setState({ list: this.state.list, text: '' })
        }
    }

    delete(deleted){
        var newDeleted = this.state.list.filter((checkItem) =>{
            return checkItem != deleted
        });
        this.setState({ list: newDeleted })
    }

    render(){
        let items = this.state.list.map((val,key)=> {
            return (
                <View  key={key}> 
                    <View style={styles.item}>
                        <View style={{width: '75%'}}>
                            <Text style={{fontSize: 20, fontFamily: 'serif'}}>{key+1}. {val}</Text> 
                            
                        </View>

                        <TouchableOpacity style={styles.delete} onPress={this.delete.bind(this,val)}>
                            <Image style={{height:40, width: 40,}} source={require('../Asset/trash.png')}/>
                                <CheckBox
                                    style={{width: 40, height: 40}}
                                    checked={this.state.checked}
                                    />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        });
        return(
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../Asset/9.jpg')} 
                    style={styles.background}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.textHeader}>
                            Catatan1
                        </Text>
                    </View>
                    
                    
                </View>
                <ScrollView >
                        {items}
                </ScrollView>
                <View style={{flexDirection: 'row-reverse'}}>
                
                    <TouchableOpacity onPress={this.create.bind(this)}>
                        <View style={styles.tambahButton}>
                        <Image style={{height:40, width: 40}} source={require('../Asset/add.png')}/>
                    
                        </View> 
                    
                    </TouchableOpacity>
                    
                    <View style={styles.textInput}>
                        <TextInput
                        multiline={true}
                        value={this.state.text}
                        placeholder='Ketik Disini..'
                        onChangeText={(text)=>this.setState({text:text})}
                        style={{fontSize: 20, fontFamily: 'serif'}}/>
                    </View>
                    
                </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
    
    },
    header:{
        height:60,
        backgroundColor:'lightseagreen',
        justifyContent:'center',
        alignItems:'center',
        elevation:10
        
    },
    textHeader:{
        fontSize:30,
        fontFamily:'serif',
        fontWeight:'bold',
        color: 'black'
    },
    textInput:{
        height:60,
        backgroundColor:'lightseagreen',
        borderWidth:2,
        borderColor:'black',
        width: '84%',
        borderRadius: 7,
    
    },
    tambahButton:{
        height:60,
        width:60,
        backgroundColor:'lightseagreen',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        paddingVertical: 5
        
    },
    item:{
        shadowOffset: {width: 5, height: 90},
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 1,
        paddingLeft: 4,
        marginTop: 3,
        position: 'relative',
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'grey',

        
    },
    
    delete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 1,
        flexDirection: 'row-reverse',
    },
    background: {
        height: "100%"
    }
    
})
export default Todo