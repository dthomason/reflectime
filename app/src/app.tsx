import React, { FC } from 'react';
import { View, LogBox, StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

LogBox.ignoreLogs(['Redux']);
LogBox.ignoreAllLogs(true);

const App: FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, height: '100%', width: '100%' }}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text>Reflectime</Text>
          </View>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    width: 100,
    height: 100,
  },
});
