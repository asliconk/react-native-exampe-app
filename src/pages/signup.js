import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function SignUp({navigation}) {
  return (
    <>
      <SafeAreaView style={style.container}>
        <ScrollView style={style.ScrollView}>
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
          </View>
          <Text style={style.Text}> CONFIRM PASSWORD:</Text>
          <View style={style.inputView}>
            <TextInput
              style={style.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
            />
          </View>
          <Text style={style.Text}> ENTER E MAIL:</Text>
          <View style={style.inputView}>
            <TextInput
              style={style.TextInput}
              placeholder="E-Mail"
              placeholderTextColor="#003f5c"
            />
          </View>
          <Text style={style.Text}> ENTER FIRST NAME:</Text>
          <View style={style.inputView}>
            <TextInput
              style={style.TextInput}
              placeholder="First Name"
              placeholderTextColor="#003f5c"
            />
          </View>
          <Text style={style.Text}> ENTER LAST NAME:</Text>
          <View style={style.inputView}>
            <TextInput
              style={style.TextInput}
              placeholder="Last Name"
              placeholderTextColor="#003f5c"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            style={style.signupBtn}>
            <Text style={style.signupText}>SIGN UP </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A6CF98',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  inputView: {
    backgroundColor: '#F9F3DF',
    borderRadius: 5,
    width: '70%',
    height: 45,
    marginBottom: 20,
    marginTop: 40,
    marginLeft: 55,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 20,
    textAlign: 'center',
    width: 250,
  },
  signupBtn: {
    width: '50%',
    borderRadius: 5,
    height: 50,
    marginLeft: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FDCEB9',
    color: 'white',
    borderRadius: 50,
    marginBottom: 20,
  },
  Text: {
    marginTop: 30,
    marginLeft: 0,
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  signupText: {
    color: 'black',
    fontSize: 20,
  },
  ScrollView: {
    width: '100%',
    flex: 1,
  },
});
