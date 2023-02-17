import {Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Natural image</Text>
          <Text style={styles.cardLable}>Nature env..</Text>
          <Text style={styles.cardDescription}>
          Nature is all the animals, plants, and other things in the world that are not made by people, and all the events and processes that are not caused by people.
          </Text>
        </View>
        <View style={styles.footerContainer}>
                <TouchableOpacity
                onPress={() => openWebsite('https://www.nature.org/en-us/')}
                >
                    <Text style={styles.cardFooter}>
                        Read More
                    </Text>
                </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
      },
      card: {
        width: 350,
        height: 420,
        borderRadius: 6,
        marginVertical: 4,
        marginHorizontal: 6
    },
    elevatedCard: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset:{
            width:1,
            height: 1
        }
    },
      headingContainer:{
        margin: 4,
      },
      headerText: {
        fontSize: 20
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
    footerContainer: {
        paddingL: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})