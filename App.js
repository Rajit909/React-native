// import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
// import React from 'react'
// import FlatCard from './components/FlatCard.js'
// import ElevatedCards from './components/ElevatedCards.js'
// import FancyCard from './components/FancyCard.js'
// import ActionCard from './components/ActionCard.js'
// import ContactList from './components/ContactList.js'

// const App = () => {
//   return (
    
//     <SafeAreaView>
//         <ScrollView>
//           <FlatCard/>
//           <ElevatedCards/>
//           <FancyCard/>
//           <ContactList/>
//           <ActionCard/>
          
//         </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default App




// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     whiteText:{
//       color: 'white'
//     },
//     darkText:{
//       color: 'black'
//     },
//     bg:{
//       backgroundColor: '#B05818',
//       color:'white'
//     }
//   });


// // import { 
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
  
// // } from 'react-native';


// // // const Name = (props)=>{
// // //   return(
// // //     <View>
// // //       <Text>
// // //       Name:  {props.name}
// // //       Age: {props.age}
// // //       </Text>
// // //       <Text style={styles.container}>
// // //       Name:  {props.name}
// // //       Age: {props.age}
// // //       </Text>
// // //     </View>
// // //   )
// // // }



// // export default function App() {
// //   const isDarkMode = useColorScheme() === 'light'
// //   return (
// //     <View style={styles.container}>
// //       {/* <Text>React-native</Text> */}
// //       {/* <Name name="Rajit" age="23"/>
// //       <Name name="Ankit" age="13"/> */}
// //       {/* <Text 
// //       style={{fontSize:28}}
// //       onPress={()=>{
// //         console.log("Text Clicked")
// //       }}
// //       selectable
// //       >
// //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, qui eligendi obcaecati rem doloribus tempore iure necessitatibus, rerum laborum adipisci ad perferendis dolores voluptatum esse architecto modi autem voluptatem quae?
// //       </Text> */}
// //       {/* <Text style={styles.bg}>
// //         Style in React-native
// //       </Text> */}
// //   <Text style={isDarkMode ? styles.darkText : styles.whiteText }>
// //       Hello world !
// //   </Text>

      
// //     </View>
// //   );
// // }

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredTask, setEnteredTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = () => {
    setTaskList(currentTaskList => [
      ...currentTaskList,
      { key: Math.random().toString(), value: enteredTask }
    ]);
    setEnteredTask('');
  };

  const removeTaskHandler = (taskKey) => {
    setTaskList(currentTaskList => {
      return currentTaskList.filter((task) => task.key !== taskKey);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new task"
          style={styles.input}
          onChangeText={text => setEnteredTask(text)}
          value={enteredTask}
          
        />
        <Button title="Add" onPress={addTaskHandler} />
      </View>
      <FlatList
        data={taskList}
        renderItem={taskData => (
          <View style={styles.listItem}>
            <Text>{taskData.item.value}</Text>
            <Button
              title="Remove"
              onPress={removeTaskHandler.bind(this, taskData.item.key)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
