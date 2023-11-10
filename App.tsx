import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home/Home";

import DetailScreen from "./src/screens/Detail/DetailScreen";
import store from "./src/redux/store";
import { Provider } from "react-redux";
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />

          {/* Add more screens as needed */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
