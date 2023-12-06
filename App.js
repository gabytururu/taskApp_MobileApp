import { StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import {useState} from 'react'
import CustomModal from './components/CustomModal';
import CustomInput from './components/CustomInput';
import CustomFlatList from './components/CustomFlatList';
import EmptyTaskMsgModal from './components/EmptyTaskMsgModal';


export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [modalVisible, setModalVisible] = useState(true)
  const [emptyTaskModal, setEmptyTaskModal] = useState(false)



  const onChangeTextHandler = (text) =>{
    setTextItem(text)
    console.log(textItem)
  }

  const addItemToListHandler = () =>{
    if(textItem.length > 0){
      setItemList(prevState =>[...prevState, {id:Math.random().toFixed(3).toString(), value:textItem}])
      setTextItem('')
    }else{
      setEmptyTaskModal(true)
      setTimeout(()=>{
        setEmptyTaskModal(false)
      },2500)
      console.error('No puedes agregar una tarea vacía')
    }
   
  }

  const renderListItem = ({item})=>(
    <View  style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button color='#e95c41' title='x' onPress={()=> onSelectItemHandler(item.id)}></Button>
    </View>
  )

  //¿por qué si en lugar de find uso filter, no funciona.. a pesar de que el filter devuelve solo 1 elemento pero aún así no se borra?
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
      <Text style={styles.text}>Mi Lista de Tareas</Text>  
      <View style={styles.container}>  
            
        <CustomInput
          textItemProp={textItem}
          InputPlaceholderMsgProp="Ingresa una Nueva Tarea"
          onChangeTextHandlerEvent = {onChangeTextHandler}
          addItemToListHandlerEvent = {addItemToListHandler}
        />
        <EmptyTaskMsgModal
          animationTypeProp ="slide"
          isVisibleProp = {emptyTaskModal}
        />
        <CustomFlatList
          itemListProp = {itemList}
          renderListItemEvent = {renderListItem} // se considera event por ser función? o prop?
        />
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
    backgroundColor: '#92E0D7',
    margin: 10,
    padding: 15,
    borderRadius:8,
  },
  text:{
    textAlign: 'center',
    paddingVertical:15,
    fontSize: 35,
    color:'#2c686e', 
    fontFamily: 'sans-serif',
    textShadowColor:'#444444',
    textShadowOffset:{width:2,height:1},
    textShadowRadius:3    

  },
  itemList:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:5,
    padding: 5, 
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
    alignItems: 'center',
    backgroundColor: '#FFE8A2',
    borderRadius: 5,
    
  },
  // por qué no funciona?
  deleteButton:{
    color: 'red',
    backgroundColor: 'green'
  }
  
});
