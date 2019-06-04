import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class Login extends React.Component {
  render() {
    return (
			<KeyboardAvoidingView behavior = "padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
					style = {styles.logo}
					source={require('./images/falcon.jpg')} />
					<Text style={styles.title}>CV App</Text>
				</View>
				<View style={styles.formContainer}>
					<StatusBar
					barStyle = "light-content"
					/>
					
					<TextInput
					placeholder = "Username or email"
					placeholderTextColor = "rgba(255,255,255,0.7)"
					returnKeyType = "next"
					onSubmitEditing = {() => this.passwordInput.focus()}
					keyboardType = "email-address"
					autoCapitalize = "none"
					autoCorrect = {false}
					style = {styles.input}
					/>
					
					<TextInput
					placeholder = "Password"
					placeholderTextColor = "rgba(255,255,255,0.7)"
					returnKeyType = "go"
					secureTextEntry
					style = {styles.input}
					ref = {(input) => this.passwordInput = input}
					/>
					
					<TouchableOpacity style = {styles.buttonContainer} onPress={() => this.props.navigation.navigate('Details')}>
						<Text style = {styles.buttonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width:100,
		height:100
	},
	title: {
		color: '#FFF',
		marginTop: 10,
		textAlign: 'center'
	},
	container2: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 10,
		color: '#FFF',
		paddingHorizontal: 10
	},
	buttonContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 15
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700'
	}
});

export default createAppContainer(AppNavigator);