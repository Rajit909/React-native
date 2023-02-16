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
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 4,
        marginHorizontal: 6
    },
    cardElevated:{
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        }
    },
    cardImage:{
        height:200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle:{
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 4
    },
    cardLable: {
        fontSize: 14,
        color: 'black',
        marginBottom: 6
    },
    cardDescription:{
        color: '#758283',
        fontSize: 15,
        marginBottom:12,
        flexShrink: 1
    },
    cardFooter: {
        backgroundColor: 'green',
        padding: 2,
        width: 90,
        borderRadius: 2
    }
})