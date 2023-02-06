import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Name = (props)=>{
  return(
    <View>
      <Text>
      Name:  {props.name}
      Age: {props.age}
      </Text>
      <Text style={styles.container}>
      Name:  {props.name}
      Age: {props.age}
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>React-native</Text> */}
      {/* <Name name="Rajit" age="23"/>
      <Name name="Ankit" age="13"/> */}
      {/* <Text 
      style={{fontSize:28}}
      onPress={()=>{
        console.log("Text Clicked")
      }}
      selectable
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, qui eligendi obcaecati rem doloribus tempore iure necessitatibus, rerum laborum adipisci ad perferendis dolores voluptatum esse architecto modi autem voluptatem quae?
      </Text> */}
      <Text style={styles.bg}>
        Style in React-native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  bg:{
    backgroundColor: 'black',
    color:'white'
  }
});
