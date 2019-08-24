import React from 'react';
import { Animated, View, Easing } from 'react-native';

class PopDown extends React.Component {
    constructor() {
        super();
        this.state = {
            popAnim: new Animated.Value(-100)
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.popAnim,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.out(Easing.quad),
                useNativeDriver: true
            }
        ).start();
    }

    render() {
        let { popAnim } = this.state;
        return (
            <Animated.View 
                style={{
                    ...this.props.style,
                    transform: [
                        { 'translateY': popAnim }
                    ]
                }}
            >
                { this.props.children }
            </Animated.View>
        );
    }
}

export default PopDown;
