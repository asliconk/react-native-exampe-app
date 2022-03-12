import  React from 'react';
import { TextInput, View, StyleSheet,Text,Button } from 'react-native';
export default function signin(){
    return (
        <><Text style={style.Text}> KULLANICI ADI:</Text>
        <View style={style.inputView}>
    
          <TextInput
            style={style.TextInput}
            placeholder="User Name"
            placeholderTextColor="#003f5c"
          //  onChangeText={(UserName) => setUserName(UserName)} 
          />
        </View>
        <Text style={style.Text}> ŞİFRE:</Text>
        <View style={style.inputView}>
            <TextInput
              style={style.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
            //  onChangeText={(password) => setPassword(password)} 
            />   
         </View>
         <Button 
         title="Sign in"
         onPress={()=> navigation.navigate('Home')}
         />
          </>        
         // </Stack.Navigator>         
      ) ;
    }
     
    const style = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#A5E1AD',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:70,
      },
      inputView: {
        backgroundColor: "#A5E1AD",
        borderRadius: 5,
        width: "70%",
        height: 45,
        marginBottom: 20,
        marginTop:40,
        marginLeft:55,
        alignItems: "center",       
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontSize:20,
        textAlign:'left',      
      },

      Button: {
        width: "50%",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginLeft:95,
        backgroundColor: "#21094E",
        color:'white',
        borderRadius:50,      
      },

      Text:{
        marginTop:30,
        marginLeft:50,
        fontSize:30,
        color:"black",   
      },

    loginText:{
      color:'white',
      fontSize:20,
    }
    });
    
