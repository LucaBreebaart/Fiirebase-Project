import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from './screens/testScreen';
import CourseScreen from './screens/courseScreen';

export default function App() {
  return (
      <CourseScreen></CourseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B0DDB1',
    padding: '50px'
  },
});
