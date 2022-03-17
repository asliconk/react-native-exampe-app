import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function SignIn({ navigation }) {
  return (
    <>
      <Text style={style.Text}> ENTER USER NAME:</Text>
      <View style={style.inputView}>

        <TextInput
          style={style.TextInput}
          placeholder="User Name"
          placeholderTextColor="#003f5c"
        />
      </View>
      <Text style={style.Text}> ENTER PASSWORD:</Text>
      <View style={style.inputView}>

        <TextInput
          style={style.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View><TouchableOpacity style={style.loginBtn}>
        <Text style={style.loginText}>SIGN IN </Text>
      </TouchableOpacity>
      <Text style={style.Text}> If you don't have an account </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={style.loginBtn}>
        <Text style={style.loginText}>SIGN UP</Text>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5E1AD',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  inputView: {
    backgroundColor: "#A5E1AD",
    borderRadius: 5,
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginTop: 40,
    marginLeft: 55,
    alignItems: "center",

  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 20,
    textAlign: 'left',

  },
  loginBtn: {
    width: "50%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 95,
    backgroundColor: "#21094E",
    color: 'white',
    borderRadius: 50,

  },
  Text: {
    marginTop: 30,
    marginLeft: 40,
    fontSize: 20,
    color: "black",

  },
  loginText: {
    color: 'white',
    fontSize: 20,
  }
});
