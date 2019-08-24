import React from 'react';
import { Animated, View, Easing } from 'react-native';

class FadeIn extends React.Component {
    constructor() {
        super();
        this.state = {
            fadeAnim: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.in(Easing.quad),
                useNativeDriver: true
            }
        ).start();
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View style={{
                ...this.props.style,
                opacity: fadeAnim
            }}>
                { this.props.children }
            </Animated.View>
        );
    }
}

export default FadeIn;
