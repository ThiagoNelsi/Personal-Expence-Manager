import React from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function NewExpence() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.subContainer}>
        <View style={styles.moneyInputContainer}>
          <Text style={styles.moneyInputText}>R$</Text>
          <TextInput style={styles.moneyInput} keyboardType='decimal-pad' maxLength={5} autoFocus={true} />
          <TextInput style={styles.centsInput} keyboardType='decimal-pad' maxLength={2} />
        </View>
        <View>
          <TextInput style={styles.descriptionInput} placeholder='Descrição...' maxLength={35} />
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default NewExpence;
