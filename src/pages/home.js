import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Home({navigation}) {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#A6CF98'}}>
        <ScrollView style={style.ScrollView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 100,
              padding: 20,
            }}>
            <Text
              style={{
                fontFamily: 'sans-serif',
                fontSize: 18,
                marginLeft: 40,
                marginTop: 30,
                marginLeft: 2,
                fontWeight: 'bold',
                color: '#064635',
                textAlign: 'left',
              }}>
              {' '}
              WELCOME TO GREEN GARDEN{' '}
            </Text>
            <TouchableHighlight
              style={{
                borderRadius:
                  Math.round(
                    Dimensions.get('window').width +
                      Dimensions.get('window').height,
                  ) / 2,
                width: Dimensions.get('window').width * 0.2,
                height: Dimensions.get('window').width * 0.2,
                backgroundColor: '#B7CADB',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              underlayColor="#ccc"
              onPress={() => alert('kişinin profil sayfasına gidilecek')}>
              <Text style={{fontWeight: 'bold'}}> profile picture </Text>
            </TouchableHighlight>
          </View>
          <View style={style.inputView}>
            <TextInput
              style={style.TextInput}
              placeholder="Find Your Plant"
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('./img/plant.jpg')}
              style={{width: 250, height: 250, borderRadius: 30}}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
              marginTop: 30,
              marginBottom: 20,
            }}>
            {' '}
            Popular Plants{' '}
          </Text>

          <ScrollView horizontal={true}>
            <View style={style.containerPopular}>
              <View style={[style.box, {backgroundColor: 'powderblue'}]} />
              <View style={[style.box, {backgroundColor: 'skyblue'}]} />
              <View style={[style.box, {backgroundColor: 'steelblue'}]} />
              <View style={[style.box, {backgroundColor: 'powderblue'}]} />
              <View style={[style.box, {backgroundColor: 'skyblue'}]} />
            </View>
          </ScrollView>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
              marginTop: 30,
              marginBottom: 20,
            }}>
            {' '}
            Category{' '}
          </Text>
          <ScrollView horizontal={true} >
            <View style={style.containerCategory} >
            <TouchableOpacity
            //onPress={() => navigation.navigate('')}
            style={style.Btn}>
            <Text style={style.categoryText}>All </Text>
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={() => navigation.navigate('')}
            style={style.Btn}>
            <Text style={style.categoryText}>Sale </Text>
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={() => navigation.navigate('')}
            style={style.Btn}>
            <Text style={style.categoryText}>Baby Plant </Text>
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={() => navigation.navigate('')}
            style={style.Btn}>
            <Text style={style.categoryText}>Indoor </Text>
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={() => navigation.navigate('')}
            style={style.Btn}>
            <Text style={style.categoryText}>Outdoor </Text>
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={() => navigation.navigate('')}
            style={style.Btn}>
            <Text style={style.categoryText}>Flower</Text>
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={() => navigation.navigate('')}
            style={style.Btn}>
            <Text style={style.categoryText}>Planter </Text>
          </TouchableOpacity>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  containerPopular: {
    flex: 1,
    backgroundColor: '#A6CF98',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  containerCategory: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#A6CF98',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  
  Text: {
    fontSize: 20,
    marginLeft: 40,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  inputView: {
    borderRadius: 5,
    width: '70%',
    height: 45,
    marginBottom: 20,
    marginTop: 40,
    marginLeft: 55,
    alignItems: 'center',
    borderRadius: 25,
  },
  TextInput: {
    width: '80%',
    height: 45,
    padding: 10,
    marginLeft: 20,
    fontSize: 20,
    borderRadius: 15,
    textAlign: 'center',
    borderColor: 'black',
    backgroundColor: '#F9F3DF',
  },
  TouchableHighlight: {
    marginRight: 30,
  },
  ScrollView: {
    width: '100%',
  },
  box: {
    width: 100,
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight:30,
  },
  Btn:{
    backgroundColor: '#FDCEB9',
    borderRadius: 5,
    height:50,
    width:80,
    marginBottom: 5,   
    justifyContent: 'center',
    alignItems:'center', 
    marginRight:30,  
  },
  categoryText:{
    color:'black',
    fontSize:20,
    alignItems:'center'
  },
});
