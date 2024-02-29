
import Avatar from "../components/logo.component"
import InputName from "../components/formLogin.component"
import { StyleSheet } from 'react-native';
import { Box } from '@gluestack-ui/themed';

export default function LoginScreen() {
 return (

  <Box style={styles.container}>
    <Avatar/>
    <InputName />
  </Box>
 )
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
   },
  });
  