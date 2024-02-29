import React from 'react';
import { StyleSheet } from 'react-native';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

export default function InputName() {
  const navigation = useNavigation();


  return (
    <FormControl isInvalid={false} size={"md"} isDisabled={false} isRequired={true} style={styles.formContainer}>

      <FormControlLabel>
        <FormControlLabelText>Digite seu Email:</FormControlLabelText>
      </FormControlLabel>
      <Input style={styles.input}>
        <InputField type="email" defaultValue="" placeholder="Email" />
      </Input>

      <FormControlLabel>
        <FormControlLabelText>Digite sua Senha:</FormControlLabelText>
      </FormControlLabel>
      <Input style={styles.input}>
        <InputField type="password" defaultValue="" placeholder="Senha" />
      </Input>

      <Button style={styles.button}>
        <ButtonText>Login</ButtonText>
      </Button>

      <Button style={styles.button} onPress={()=>navigation.navigate('Register')} >
        <ButtonText>Register</ButtonText>
      </Button>

    </FormControl>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
    backgroundColor: '000000', 
    borderRadius: 5,
    flex: 1, 
    maxWidth: '100%', 
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8B4513', 
    borderRadius: 5,
    color: '#F2F2F2', 
  },
  button: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#8B4513', 
    borderRadius: 5,
    color: '#F2F2F2', 
  },
});
