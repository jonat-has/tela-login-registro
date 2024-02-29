import { StyleSheet } from 'react-native';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Checkbox,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxIndicator,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import { CheckIcon } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

export default function RegistrationForm() {

    const navigation = useNavigation();

  return (
    <FormControl isInvalid={false} size={"md"} isDisabled={false} isRequired={true} style={styles.formContainer}>
      <FormControlLabel>
        <FormControlLabelText>Nome:</FormControlLabelText>
      </FormControlLabel>
      <Input style={styles.input}>
        <InputField type="text" defaultValue="" placeholder="Nome" />
      </Input>

      <FormControlLabel>
        <FormControlLabelText>Email:</FormControlLabelText>
      </FormControlLabel>
      <Input style={styles.input}>
        <InputField type="email" defaultValue="" placeholder="Email" />
      </Input>

      <FormControlLabel>
        <FormControlLabelText>Senha:</FormControlLabelText>
      </FormControlLabel>
      <Input style={styles.input}>
        <InputField type="password" defaultValue="" placeholder="Senha" />
      </Input>

      <FormControlLabel>
        <FormControlLabelText>Confirmar Senha:</FormControlLabelText>
      </FormControlLabel>
      <Input style={styles.input}>
        <InputField type="password" defaultValue="" placeholder="Confirmar Senha" />
      </Input>

        
    
          <Checkbox   size="md" isInvalid={false} isDisabled={false}   >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon}/>
            </CheckboxIndicator>
            <CheckboxLabel>I agree to the terms of use</CheckboxLabel>
          </Checkbox>
      
      

      <Button style={styles.button} onPress={()=>navigation.navigate('Login')}>
        <ButtonText>Registrar</ButtonText>
      </Button>

      <Button variant="secondary" style={styles.button} onPress={()=>navigation.navigate('Login')}>
        <ButtonText>Voltar</ButtonText>
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
    justifyContent: 'center',
    
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
  checkbox: {
    marginRight: 10, // Add margin for spacing
  },
});
