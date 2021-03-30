import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#8B10AE' translucent={false} />
      <Routes />
    </>
  );
}
