import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, StatusBar} from 'react-native';
import {useState} from 'react'
import CustomModal from './components/CustomModal';
import CustomInput from './components/CustomInput';
import CustomFlatList from './components/CustomFlatList';


export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [modalVisible, setModalVisible] = useState(true)

  const onChangeTextHandler = (text) =>{
    //console.log(text)
    setTextItem(text)
    console.log(textItem)
  }

  const addItemToListHandler = () =>{
    setItemList(prevState =>[...prevState, {id:Math.random().toFixed(3).toString(), value:textItem}])
    console.log('ESTE ES EL ITEM DE LA LISTA -->',itemList)
    console.dir(itemList)
    setTextItem('')
  }

  // nota/reminder: lleva doble llave porque es un destructuring (eg. {props.item} --> {{item}} esto es debido a que item es parte de un objeto más grande) + return implícito s/ llaves ni return reserverd word
  const renderListItem = ({item})=>(
    <View  style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button title='x' onPress={()=> onSelectItemHandler(item.id)}></Button>
    </View>
  )

  //por qué si en lugar de find uso filter, no funciona.. a pesar de que el filter devuelve solo 1 elemento pero aún así no se borra
  const onSelectItemHandler =(id)=>{
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find(item => item.id === id))
    console.log(itemSelectedToDelete)
  }
  
  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item)=>item.id !== itemSelectedToDelete.id))
    setModalVisible(!modalVisible)
  }


  return (
    <>
      <View style={styles.container}>        
        <CustomInput
          textItemProp={textItem}
          InputPlaceholderMsgProp="Ingrese Nueva Tarea"
          onChangeTextHandlerEvent = {onChangeTextHandler}
          addItemToListHandlerEvent = {addItemToListHandler}
        />
        <CustomFlatList
          itemListProp = {itemList}
          renderListItemEvent = {renderListItem} // se considera event por ser función? o prop?
        />
        {/* <FlatList
          data={itemList} // el array que va a renderizar en lista
          renderItem={renderListItem} // el formato para renderizar (los componentes y estructura)
          keyExtractor={item=>item.id} //el id
        />     */}
      </View>
      <CustomModal
        animationTypeProp="fade"
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelectedToDelete}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    margin: 10,
    padding: 15,
    borderRadius:8,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  itemList:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:5,
    padding: 5, 
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderRadius: 5
  },
});
