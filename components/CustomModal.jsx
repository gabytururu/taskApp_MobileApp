import { View, Text, StyleSheet, Modal, Button, Dimensions } from 'react-native'
import React from 'react'

const CustomModal = ({
    animationTypeProp,
    isVisibleProp,
    itemSelectedProp,
    onDeleteItemHandlerEvent,
    setModalVisibleEvent
   

}) => {
  return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp}>
    <View style={styles.modalMainContainer}>
      <View style={styles.modalMessageContainer}>
        <Text style={styles.modalMessage}>Eliminaremos la siguiente tarea:</Text>
        <Text style={styles.modalMessage}>"{itemSelectedProp.value}"</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button title="¡No! no borres" color="#ef233c" onPress={()=> setModalVisibleEvent(!isVisibleProp)}></Button>
        <Button title="Sí, Chau tarea" color="#8fc059" onPress={onDeleteItemHandlerEvent}></Button>
      </View>
    </View>
  </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    modalMainContainer:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#92E0D7',
        marginVertical:40,
        marginHorizontal: 10,
        borderRadius: 8
      },
      modalMessageContainer:{
        height: Dimensions.get('window').height * 0.7,
        textAlign: 'center',
        backgroundColor: '#3b3b54',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 8
      },
      modalMessage:{
        color: '#ffffff',
        fontSize: 18
      },
      modalButtonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#3b3b54',
        paddingVertical:15,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 3

      }
})