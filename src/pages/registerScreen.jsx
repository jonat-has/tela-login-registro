import { StyleSheet } from 'react-native';
import { Box } from '@gluestack-ui/themed';
import RegistrationForm from '../components/formRegister.component';

export default function RegisterScreen() {
 return (

  <Box style={styles.container}>
    <RegistrationForm></RegistrationForm>
  </Box>
 )
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
   },
  });
  