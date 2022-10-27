import { StyleSheet, Text, View } from 'react-native';
const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
    subTitleContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 24,
      },
      subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
      },
});
