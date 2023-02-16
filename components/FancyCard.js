import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
    <View style={[styles.card, styles.cardElevated]}>
    <Image
    source={{
        uri:'https://www.holidify.com/images/bgImages/AGRA.jpg'
    }}
    style={styles.cardImage}
    />
    <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Taj-Mahal</Text>
        <Text style={styles.cardLable}>Tourist attractions</Text>
        <Text style={styles.cardDescription}>Located on the banks of River Yamuna in Uttar Pradesh, Agra is a popular tourist destination as it is home to one of the 7 wonders of the world, the Taj Mahal.</Text>
        <Text style={styles.cardFooter}>20 min away</Text>
    </View>
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
    },
    cardBody: {
        alignItems: 'center'
    },
    cardTitle:{

    },
    cardLable: {

    },
    cardDescription:{

    },
    cardFooter: {

    }
})