import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [Title, setTitle] = useState(new Animated.Value(0));
  const [One, setOne] = useState(new Animated.Value(0));
  const [Two, setTwo] = useState(new Animated.Value(0));
  const [Three, setThree] = useState(new Animated.Value(0));
  const [Btn, setBtn] = useState(new Animated.Value(0));

  let Count = 0;

  const Animation = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setInterval(() => {
      if (Count === 1) {
        Animated.timing(Title, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }

      if (Count === 2) {
        Animated.timing(One, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }

      if (Count === 3) {
        Animated.timing(Two, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }

      if (Count === 4) {
        Animated.timing(Three, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }

      if (Count === 5) {
        Animated.timing(Btn, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }

      Count += 1;
    }, 1000);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={Animation}>
      <Animated.View style={[styles.flex, { opacity: opacity }]}>
        <Text style={[styles.title, { opacity: Title }]}>HOW TO USE</Text>
        <Animated.View style={[styles.one, { opacity: One }]}>
          <Text style={styles.text}>Part 1</Text>
        </Animated.View>

        <Animated.View style={[styles.two, { opacity: Two }]}>
          <Text style={styles.text}>Part 2</Text>
        </Animated.View>

        <Animated.View style={[styles.three, { opacity: Three }]}>
          <Text style={styles.text}>Part 3</Text>
        </Animated.View>

        <Animated.View style={[styles.btn, { opacity: Btn }]}>
          <Text style={styles.buttonText}>GOT IT!</Text>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  flex: {
    backgroundColor: 'black',
    width: '30%',
    height: '100vh',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: '50px',
    marginBottom: '20px',
    opacity: 1,
  },
  one: {
    display: 'flex',
    border: '1px solid black',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    width: '100%',
    height: '80px',
    marginBottom: '10px',
  },
  two: {
    display: 'flex',
    border: '1px solid black',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    width: '100%',
    height: '240px',
    marginBottom: '10px',
  },
  three: {
    display: 'flex',
    border: '1px solid black',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    width: '100%',
    height: '80px',
    marginBottom: '40px',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '80px',
    backgroundColor: '#506AD4',
    borderRadius: '10px',
  },
  text: {
    fontSize: '35px',
  },
  buttonText: {
    fontSize: '35px',
    color: 'white',
  },
});
