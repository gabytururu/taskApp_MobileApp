import { View, Text, FlatList, StyleSheet} from 'react-native'
import React from 'react'

const CustomFlatList = ({
  itemListProp,
  renderListItemEvent,

}) => {
  return (
    <FlatList
    data={itemListProp} // el array que va a renderizar en lista
    renderItem={renderListItemEvent} // el formato para renderizar (los componentes y estructura)
    keyExtractor={item=>item.id} //el id
  />    
  )
}

export default CustomFlatList

// const styles = StyleSheet.create({  
//   itemList:{
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin:5,
//     padding: 5, 
//     borderBottomColor: 'gray',
//     borderBottomWidth: 3,
//     alignItems: 'center',
//     backgroundColor: 'yellow',
//     borderRadius: 5
//   },
// })