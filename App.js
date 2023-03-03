import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// form validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'should be min of 4 characters')
  .max(16, 'should be max of 16 characters')
  .required('Length is required')
})

export default function App() {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numers, setNumers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  
  const generatePasswordString = (passwordLength) => {

  }

  const createPassword = (characters, passwordLength) => {
    
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})