import { FlatList} from 'react-native'
import React from 'react'

const CustomFlatList = ({
  itemListProp,
  renderListItemEvent,

}) => {
  return (
    <FlatList
    data={itemListProp}
    renderItem={renderListItemEvent} 
    keyExtractor={item=>item.id} 
  />    
  )
}

export default CustomFlatList

// ¿ por qué no me funciona el stylesheet si lo muevo acá? es porque el RenderItem function está en app? debería migrarlo también para acá?

