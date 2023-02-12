import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    
    <View style={styles.headingText}>
      <Text>Flat Card </Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  )

}

export default FlatCard



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  card:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardOne:{
    backgroundColor: 'red'
  },
  cardTwo:{
    backgroundColor: 'blue'
  },
  cardThree:{
    backgroundColor: 'green'
  }
});