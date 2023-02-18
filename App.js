import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard.js'
import ElevatedCards from './components/ElevatedCards.js'
import FancyCard from './components/FancyCard.js'
import ActionCard from './components/ActionCard.js'
import ContactList from './components/ContactList.js'

const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>

          <FlatCard/>
          <ElevatedCards/>
          <FancyCard/>
          <ContactList/>
          <ActionCard/>
          
        </ScrollView>
    </SafeAreaView>
  )
}

export default App




const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    whiteText:{
      color: 'white'
    },
    darkText:{
      color: 'black'
    },
    bg:{
      backgroundColor: '#B05818',
      color:'white'
    }
  });


// import { 
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
  
// } from 'react-native';


// // const Name = (props)=>{
// //   return(
// //     <View>
// //       <Text>
// //       Name:  {props.name}
// //       Age: {props.age}
// //       </Text>
// //       <Text style={styles.container}>
// //       Name:  {props.name}
// //       Age: {props.age}
// //       </Text>
// //     </View>
// //   )
// // }



// export default function App() {
//   const isDarkMode = useColorScheme() === 'light'
//   return (
//     <View style={styles.container}>
//       {/* <Text>React-native</Text> */}
//       {/* <Name name="Rajit" age="23"/>
//       <Name name="Ankit" age="13"/> */}
//       {/* <Text 
//       style={{fontSize:28}}
//       onPress={()=>{
//         console.log("Text Clicked")
//       }}
//       selectable
//       >
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, qui eligendi obcaecati rem doloribus tempore iure necessitatibus, rerum laborum adipisci ad perferendis dolores voluptatum esse architecto modi autem voluptatem quae?
//       </Text> */}
//       {/* <Text style={styles.bg}>
//         Style in React-native
//       </Text> */}
//   <Text style={isDarkMode ? styles.darkText : styles.whiteText }>
//       Hello world !
//   </Text>

      
//     </View>
//   );
// }

