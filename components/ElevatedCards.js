import {StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'


export default function ElevatedCards() {
    return(
        <View>
            <Text style={styles.headingText}>
                Elevated card
            </Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>
                        Tap
                    </Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>
                        Tap
                    </Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>
                        Tap
                    </Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>
                        Tap
                    </Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>
                        Tap
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
      },
      container:{
        padding: 8
      },
      card: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius:4,
        margin:8,
        color: '#00000'
      },
      cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 2,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowColor: '#333'
      }
})