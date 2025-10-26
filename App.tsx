import React from "react";
import {
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroAnimations,
  ViroMaterials,
} from "@reactvision/react-viro";
import Level01 from "./levels/Level01";

const monitorWidth = 0.375; // 37.5cm

ViroARTrackingTargets.createTargets({
  level01: {
    source: require("./imgs/levels/level01.png"),
    orientation: "Up",
    physicalWidth: monitorWidth,
    type: "Image",
  },
  level02: {
    source: require("./imgs/levels/level02.png"),
    orientation: "Up",
    physicalWidth: monitorWidth,
    type: "Image",
  },
  level03: {
    source: require("./imgs/levels/level03.png"),
    orientation: "Up",
    physicalWidth: monitorWidth,
    type: "Image",
  },
  level04: {
    source: require("./imgs/levels/level04.png"),
    orientation: "Up",
    physicalWidth: monitorWidth,
    type: "Image",
  },
});

ViroMaterials.createMaterials({
  stone: {
    diffuseTexture: require("./imgs/tiles/stone.jpg"),
    wrapS: "Repeat", // horizontal
    wrapT: "Repeat", // vertical
  },
});

ViroAnimations.registerAnimations({
  // animateGetKey not in use currently
  animateGetKey: {
    properties: {
      opacity: 0,
      translateY: 0.2,
      translateZ: 0.1,
    },
    easing: "Bounce",
    duration: 5000,
  },
  animateIdleKey: {
    properties: {
      rotateZ: "+=45",
    },
    duration: 1000,
  },
});

const App = () => {
  return (
    <ViroARSceneNavigator initialScene={{ scene: Level01 }} autofocus={true} />
  );
};

export default App;
