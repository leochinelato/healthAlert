import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

export default function RootLayout() {
  NavigationBar.setBackgroundColorAsync("#FFF")
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})