/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,TouchableOpacity,
  ImageBackground
} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      check:false,
      check1:false,
      check2:false,
      check3:false,
      email:'',
      nickname:'',
      password:'',
      confirmPassword:'',
      conditionChecker:false,
      conditionChecker1:false,
      conditionChecker2:false,
      conditionChecker3:false,
    }
  }
 
  render(){
    return (
      <KeyboardAvoidingView  behavior="height" enabled>
       <ScrollView>
      <View style={{backgroundColor:"white"}}>
         <View style={{width:'100%',backgroundColor:"white"}}>
      
      <ImageBackground source={require('./img/z.png')} style={{height:220,width:'100%'}}></ImageBackground>
  
    </View>
  <View style={{padding:10,backgroundColor:"white",height:'100%'}}>
  <View  style={styles.shadow}>
  <View style={{ justifyContent: 'center',alignItems: 'center', }} >
         
         <View style={{ flexDirection: 'row',alignItems: 'center',backgroundColor: 'white', height: 50,borderBottomColor:"#B5B4B4",borderBottomWidth:2,margin: 10,width:340,}}>  
  
        
         <Image source={this.state.check ? require('./img/email_active.png'): require('./img/email.png') } style={styles.ImageStyle} />
  
    <TextInput
     value={(this.state.conditionChecker?(this.state.conditionChecker?this.state.value : " " ):'이메일') }
     underlineColorAndroid='transparent'
     onFocus={(email) => this.setState({check:true,email,conditionChecker:true})}
     onBlur={()=>this.setState({check:false})}
      style={{ backgroundColor: 'white', color:"#B5B4B4",   height: 40, fontSize:18,paddingLeft:80,textAlign:"center"}}
    />
  
  </View>
  </View>
  
  <View style={{ justifyContent: 'center',alignItems: 'center', }}>
         
         <View style={{ flexDirection: 'row',alignItems: 'center',backgroundColor: 'white', height: 50,borderBottomColor:"#B5B4B4",borderBottomWidth:2,margin: 10,width:340,}}>  
  
        
         <Image source={this.state.check1? require('./img/nickname_active.png'): require('./img/nickname.png')} style={styles.ImageStyle} />
  
    <TextInput
    value={(this.state.conditionChecker1?(this.state.conditionChecker1?this.state.value : " " ):'닉네임') }

     underlineColorAndroid='transparent'
      onFocus={(nickname) => this.setState({check1:true,nickname,conditionChecker1:true})}
     onBlur={()=>this.setState({check1:false})}
      style={{  backgroundColor: 'white', color:"#B5B4B4",   height: 40, fontSize:18,paddingLeft:80,textAlign:"center"}}
    />
  
  </View>
  </View>
  <View style={{ justifyContent: 'center',alignItems: 'center', }}>
         
         <View style={{ flexDirection: 'row',alignItems: 'center',backgroundColor: 'white', height: 50,borderBottomColor:"#B5B4B4",borderBottomWidth:2,margin:10,width:340,}}>  
  
        
         <Image source={this.state.check2 ? require('./img/password_active.png'): require('./img/password.png')} style={styles.ImageStyle} />
  
    <TextInput

value={(this.state.conditionChecker2?(this.state.conditionChecker2?this.state.value : " " ):' 비밀번호') }

     underlineColorAndroid='transparent'
      onFocus={(password) => this.setState({check2:true,password,conditionChecker2:true})}
      onBlur={()=>this.setState({check2:false})}
      style={{  backgroundColor: 'white', color:"#B5B4B4",  textAlign:"center", height: 40, fontSize:18,paddingLeft:80}}
    />
  
  </View>
  </View>
  <View style={{ justifyContent: 'center',alignItems: 'center', }}>
         
         <View style={{ flexDirection: 'row',alignItems: 'center',backgroundColor: 'white', height: 50,borderBottomColor:"#B5B4B4",borderBottomWidth:2,margin: 10,width:340,}}>  
  
        
         <Image source={this.state.check3 ? require('./img/password_active.png'): require('./img/password.png')} style={styles.ImageStyle} />
         
    <TextInput
     value={(this.state.conditionChecker3?(this.state.conditionChecker3?this.state.value : " " ):' 비밀번호 확인') }

      underlineColorAndroid='transparent'
      onFocus={(confirmPassword) => this.setState({check3:true,confirmPassword,conditionChecker3:true})}
      onBlur={()=>this.setState({check3:false})}
      style={ { backgroundColor: 'white', color:"#B5B4B4",   height: 40,fontSize:18,paddingLeft:80,textAlign:"center"}}
    />
  
  </View>
  </View>
  <View style={{alignItems:"center",justifyContent:"center",paddingTop:30}}>
  <TouchableOpacity>
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1EBBD7', '#7AD7FF']} style={{height:50,width:350,borderRadius:40,}}>
    <Text style={styles.buttonText}>
    다음
    </Text>
  </LinearGradient>
  
  </TouchableOpacity>
  
  <Text style={{paddingTop:30,color:"#FF62A5",fontSize:18}}>이미 계정이 존재하나요?</Text>
  </View>
  
  </View>
  
  </View>
  
    
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
       
    );
  };
  
  }
  
const styles = StyleSheet.create({
  shadow:{
    backgroundColor:"white",
    borderRadius:12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    
    elevation: 13,
  },
  
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  ImageStyle: {
   
    
    resizeMode : 'stretch',
    alignItems: 'center',
   
    
  },
 });

export default App;
