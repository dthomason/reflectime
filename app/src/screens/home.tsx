import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BrandIcon from '../../assets/svg/reflect_icon_simple.svg';

export const Home: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <BrandIcon width={200} height={200} />
        <Text>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 300,
  },
});
