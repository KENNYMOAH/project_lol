import Orientation from 'react-native-orientation';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class project_lol extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }

  componentWillMount() {
    // The getOrientation method is async. It happens sometimes that 
    // you need the orientation at the moment the JS runtime starts running on device. 
    // `getInitialOrientation` returns directly because its a constant set at the 
    // beginning of the JS runtime. 
 
    const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      Orientation.lockToLandscape();
    } else {
      // do something else 
    }
  }
 
  componentDidMount() {
    // this locks the view to Portrait Mode 
    Orientation.lockToLandscape();
 
    // this locks the view to Landscape Mode 
    // Orientation.lockToLandscape(); 
 
    // this unlocks any previous locks to all Orientations 
    // Orientation.unlockAllOrientations(); 
 
    Orientation.addOrientationListener(this._orientationDidChange);
  }
 
  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout 
    } else {
      // do something with portrait layout 
    }
  }
 
  componentWillUnmount() {
    Orientation.getOrientation((err, orientation) => {
      console.log(`Current Device Orientation: ${orientation}`);
    });
 
 
    // Remember to remove listener 
    Orientation.removeOrientationListener(this._orientationDidChange);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontFamily: "PressStart2P",
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('project_lol', () => project_lol);
