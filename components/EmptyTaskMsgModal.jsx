import { View, Text, Modal, StyleSheet} from 'react-native'
import React from 'react'

const EmptyTaskMsgModal = ({
    animationTypeProp,
    isVisibleProp,
}) => {
  return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp}>
        <View style={styles.modalMainContainer}>
            <Text style={styles.modalMessage}>¡Ooopss! Hubo Error</Text>
            <Text style={styles.modalMessageSmall}>No puedes agregar una tarea vacia</Text>
        </View>   
    </Modal>
  )
}

export default EmptyTaskMsgModal

const styles = StyleSheet.create({
    modalMainContainer:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#92E0D7',
        marginVertical:40,
        marginHorizontal: 10,
        borderRadius: 8,
        padding:35
    },
    modalMessage:{
        color: '#444444',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '500'
    },
    modalMessageSmall:{
        color: '#444444',
        fontSize: 22,
        marginVertical:10,
        textAlign: 'center'
    }
})