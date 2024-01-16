import { View, Text , StyleSheet, Pressable} from 'react-native'
import React from 'react'

const PrimaryBtn = ({label}) => {
  return (
    <Pressable style={({pressed}) => [styles.container, {backgroundColor: pressed? '#f58d1d': '#ff7622'},]}>
      <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  )
}

export default PrimaryBtn
const styles = StyleSheet.create({
    container:{
        // marginTop: 40,
        backgroundColor:"",
        paddingVertical: 16,
        // marginHorizontal: 18,
        borderRadius: 10,


    },
    btnText:{
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'white'
    }
})