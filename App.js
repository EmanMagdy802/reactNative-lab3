import React from 'react';
// import { StyleSheet, Text, View, SectionList } from 'react-native';
import RootNavigator from './navigation/index';

const App = () => <RootNavigator />;

export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <SectionList
//       sections={{structuredCategories}}
//   renderItem={({item, index}) => <Text style={{fontStyle: 40}}>{item}</Text>}
//   renderSectionHeader={({section: {title, data} }) => <Text style={{color: 'orange', fontSize: 30}}>{data}</Text> }
//    ListHeaderComponent={<Text>this is header</Text>}
//    ListFooterComponent={<Text>this is footer</Text>}
//   keyExtractor={item => item} 
//   />
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
