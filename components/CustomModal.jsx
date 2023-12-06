import { View, Text, StyleSheet, Modal, Button } from 'react-native'
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
        <Text>Se Eliminará El Siguiente Elemento de tu Lista:</Text>
        <Text>{itemSelectedProp.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button title="¡No! No lo borres" color="#ef233c" onPress={()=> setModalVisibleEvent(!isVisibleProp)}></Button>
        <Button title="Sí, Elimina la tarea" color="aquamarine" onPress={onDeleteItemHandlerEvent}></Button>
      </View>
    </View>
  </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    modalMainContainer:{
        backgroundColor: '#ccc',
        marginVertical:40,
        marginHorizontal: 10,
        borderRadius: 8
      },
      modalMessageContainer:{
        height: 150,
        textAlign: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
    
      },
      modalButtonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'blue',
        marginHorizontal: 30,
        marginBottom: 30
      }
})