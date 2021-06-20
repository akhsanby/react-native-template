import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SecondScreen from '../screens/SecondScreen';

const Stack = createStackNavigator();

const Router = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="SecondScreen" component={SecondScreen} />
		</Stack.Navigator>
	);
};

export default Router;