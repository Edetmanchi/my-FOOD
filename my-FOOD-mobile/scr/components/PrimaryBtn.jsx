import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const PrimaryBtn = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.btnText}>{label}</Text>
    </View>
  )
}

export default PrimaryBtn
const styles = StyleSheet.create({
    container:{
        // marginTop: 40,
        backgroundColor:"#ff7622",
        paddingVertical: 17,
        marginHorizontal: 18,
        borderRadius: 10,


    },
    btnText:{
        fontSize: 18,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'white'
    }
})