import { View, Text } from "react-native";
import React from "react";
import Navigation from "./src/navigation/navigator";

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    )
  }
}

export default App;