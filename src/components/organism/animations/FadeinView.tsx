import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const FadeInView: React.FC<FadeInViewProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [-150, 10, 1],
            }),
          },
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
