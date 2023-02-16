import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
    <View style={[styles.card, styles.cardElevated]}>
    <Image
    source={{
        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnPZ4LMkD727cU9qaxTpd0P7rvQcUR84Rt5-Z-FUZug&s'
    }}
    style={styles.cardImage}
    />
    </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {

    },
    cardElevated:{

    },
    cardImage:{
        width: 350,
        height:200,
        marginLeft: 4  
    }
})