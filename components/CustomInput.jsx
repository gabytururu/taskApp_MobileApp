import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

const CustomInput = ({
  textItemProp,
  InputPlaceholderMsgProp,
  onChangeTextHandlerEvent,
  addItemToListHandlerEvent

}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={InputPlaceholderMsgProp}
        onChangeText={onChangeTextHandlerEvent}
        value={textItemProp}
      />
      <Button 
        style={styles.addButton}
        title='Add'
        color='green'
        onPress={addItemToListHandlerEvent}
      />
  </View>      
  )
}

export default CustomInput

const styles = StyleSheet.create({
  inputContainer:{
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textInput:{
    width:250,
    padding:5,
    margin:5,
    // backgroundColor:'blue',
    borderBottomColor: 'purple',
    borderBottomWidth: 3
  },
   //por qué no funciona?? pareciera que solo funciona si hago el styling inline
   addButton:{
    color: 'green',
    textAlign: 'center',
    marginTop: 1
  },
})