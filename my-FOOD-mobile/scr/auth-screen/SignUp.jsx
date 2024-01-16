import { View, Text, TouchableOpacity, StyleSheet, ScrollView ,KeyboardAvoidingView, TextInput} from 'react-native'
import React, {useState} from 'react'
import { CheckBox , Icon, SocialIcon, SocialIconProps} from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context'
// import { TextInput, ToggleButton } from 'react-native-paper';
import PrimaryBtn from '../components/PrimaryBtn';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons';

export default function LogIn() {
  const [text, setText] = React.useState('');
  const [checked, setState] = React.useState(true);
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);


  const toggleCheckbox = () => setState(!checked);


  const toggleSecureEntry=() => {
    setSecureEntry(!secureEntry)
  }


  // social media icons action
  const dataList = [
    { type: 'facebook' },
    { type: 'twitter' },
    { type: 'apple' },
   
  ];
    
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <KeyboardAvoidingView>
        <View  style={styles.body}>
          <View  style={styles.container1}>
                <View style={styles.view1}>
                    <Text style={styles.headerText1}>Sign Up</Text>
                    <Text style={styles.headerText2}>Please sign up to get started</Text>
                </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.view2}> 
              <View>
                <Text style={styles.label}>Name</Text>
                <View style={styles.inputFieldContainer}>
                  <TextInput
                      style={styles.inputField}
                          keyboardType='defualt'
                          placeholder='Usman Chris'
                          placeholderTextColor="#52545c"
                          value={text}
                          onChangeText={(text) => setPassword(text)}
                      />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputFieldContainer}>
                  <TextInput
                      style={styles.inputField}
                          keyboardType='email-address'
                          placeholder='anything@gmail.com'
                          placeholderTextColor="#52545c"
                          value={text}
                          onChangeText={(text) => setPassword(text)}
                      />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputFieldContainer}>
                  <TextInput
                      style={styles.inputField}
                          keyboardType='password'
                          placeholder='password'
                          placeholderTextColor="#52545c"
                          secureTextEntry={secureEntry}
                          value={Number}
                          onChangeText={(text) => setPassword(text)}
                      />
                  <Ionicons name={secureEntry ? 'eye': 'eye-off'} size={24} color="grey"  onPress={toggleSecureEntry}/>
                </View>
              </View>
              <View>
                <Text style={styles.label}>Retype Password</Text>
                <View style={styles.inputFieldContainer}>
                  <TextInput
                      style={styles.inputField}
                          keyboardType='password'
                          placeholder='password'
                          placeholderTextColor="#52545c"
                          secureTextEntry={secureEntry}
                          value={Number}
                          onChangeText={(text) => setPassword(text)}
                      />
                  <Ionicons name={secureEntry ? 'eye': 'eye-off'} size={24} color="grey"  onPress={toggleSecureEntry}/>
                </View>
              </View>
      
            </View>
   
            <View  style={styles.view4}>
              <PrimaryBtn label="SIGN UP"/>
            </View>
           
              {/* <Text style={{textAlign:'center'}}>OR</Text> */}
            {_.chunk(dataList, 3).map((chunk, chunkIndex) => (
              <View
              key={chunkIndex}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                // height:30
              }}
              >
                {chunk.map((social, index) => (
                  <SocialIcon
                    type={social.type}
                    iconType={social.iconType ? social.iconType : 'font-awesome'}
                    key={`${chunkIndex}-${index}`}
                    style={{
                      backgroundColor:
                        social.type === 'apple' ? 'black' : social.type === 'facebook' ? '#1877f2' : '#1da1f2',
                        height: 50,
                        width: 50
                    }}
                  />
              ))}
        </View>
            ))}

          </View>

        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  body:{
    // backgroundColor: 'black'
  },

  container1:{
    backgroundColor: 'black',
    // flex: 1
    height: '25%',
    justifyContent: 'center',
    alignItems:'center',
  },
  headerText1:{
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 30

    
  },
  headerText2:{
    color: 'white',
    textAlign:'center',
    fontWeight: 'bold',
    paddingVertical: 5
  },
  container2:{
    height: '75%',
    // paddingVertical: 10,
    paddingHorizontal: 24,
    gap: 10,
    justifyContent: 'space-evenly',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white'
  },
  view2 :{
    gap: 10
  },
  label:{
    paddingVertical: 6,
    
    color:'#52545c'
  },
  inputFieldContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 10
    },
    inputField:{
        width: 240,
        height: 44,
    },

 
 



})








