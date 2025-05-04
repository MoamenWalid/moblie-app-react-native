import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.red }>Just red</Text>
      <Text style={ styles.bigBlue }>Just bigBlue</Text>
      <Text style={[ styles.bigBlue, styles.red ]}>bigBlue, then red</Text>
      <Text style={ [styles.red, styles.bigBlue] } numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem, deserunt at facere deleniti ratione ad odit iure? Eum a ea est maxime obcaecati illum deleniti nulla, eveniet illo ipsa!
      </Text>
  
      <View style={{ marginBlock: 20 }}>
        <Button title='Click me!' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginTop: 60,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },

  red: {
    color: 'red'
  }
})