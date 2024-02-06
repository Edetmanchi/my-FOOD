import { View, Text, TouchableOpacity, StyleSheet, ScrollView ,KeyboardAvoidingView, TextInput} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PrimaryBtn from '../components/PrimaryBtn';

export default function LogIn() {
  const [text, setText] = React.useState('');
  const [password, setPassword] = useState('');
  
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <KeyboardAvoidingView>
        <View  style={styles.body}>
          <View  style={styles.container1}>
                <View style={styles.view1}>
                    <Text style={styles.headerText1}>Forgot Password</Text>
                    <Text style={styles.headerText2}>Enter your email to reset password</Text>
                </View>
          </View>
          <View style={styles.container2}>
                <View style={styles.view2}> 
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
                
            <View  style={styles.view4}>
              <PrimaryBtn label="SEND CODE"/>
            </View>
                </View>
               
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
    height: '40%',
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
    height: '60%',
    // paddingVertical: 10,
    paddingHorizontal: 24,
    gap: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white'
  },
  view2 :{
    gap: 30,
    marginTop:30
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
        height: 47,
    },


  


})








