import { Image, Box, Text } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

export default function Avatar() {
    return (
        <Box style={styles.container}>
            <Image 
                w='$full'
                h='475px'
                alt=""
                position='absolute'
                source={{
                    uri: "./public/logo/logo.jpg",
                }}
            />
            <Text style={styles.text}>Best coffee in the world</Text>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      width: '100%', 
      height: 100, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
        color: '#D26B1C',
        marginTop: '275px'
      },
  });
  