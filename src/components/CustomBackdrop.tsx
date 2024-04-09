import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";


const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, .5],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "#000",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return <AnimatedBlurView intensity={20} style={[style,{flex: 1, backgroundColor: "rgba(0,0,0,0.5)"}]} />;
};

export default CustomBackdrop;