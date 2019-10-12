import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Hello</Text>
//         <Text>Mr. Khan</Text>
//       </View>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>This is test component!</Text>
//         <Button title="Hello Mr. Khan" />
//       </View>
//     );
//   }
// }

class TestAPP extends Component {
  state = {
    textValue: 'Hello',
  };

  onPress = () => {
    this.setState({
      textValue: 'Mr. Khan',
    });
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>{this.state.textValue}</Text>
        <Button title="Click Here" onPress={this.onPress}/>
      </View>
    );
  }
}

export default TestAPP;
