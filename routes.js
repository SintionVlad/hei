import Plan from './src/components/Plan';
import Screen1 from './src/components/Screen1';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
    Home: {
      screen: Screen1,

    },
    Plan: {
      screen: Plan
    },
  }, {
      defaultNavigationOptions: {
          header: null
      }
  });
  


  export default createAppContainer(AppNavigator);
  