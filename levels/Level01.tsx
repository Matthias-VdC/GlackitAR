import React, { useCallback, useState } from "react";
import {
  ViroARScene,
  ViroAmbientLight,
  ViroARImageMarker,
  ViroNode,
  ViroQuad,
} from "@reactvision/react-viro";
import Level02 from "./Level02";
import ThreeByOneBox from "../gameObjects/ThreeByOneBox";
import Key from "../gameObjects/Key";

//@ts-ignore:next-line
const Level01 = ({ sceneNavigator }) => {
  const [pauseGameUpdates, setPauseGameUpdates] = useState(false);
  const [pauseKeyUpdates, setPauseKeyUpdates] = useState(false);
  const [keyActive, setKeyActive] = useState(true);

  const handleNextLevel = useCallback(() => {
    sceneNavigator.replace({
      scene: Level02,
    });
  }, [sceneNavigator]);

  const handleGameAnchorFound = useCallback(() => {
    // setPauseGameUpdates(true);
    setPauseKeyUpdates(false);
  }, []);

  const handleKeyAnchorFound = useCallback(() => {
    setKeyActive(false);
    setPauseKeyUpdates(true);
  }, []);

  const handleReset = useCallback(() => {
    setKeyActive(true);
    setPauseKeyUpdates(false);
    setPauseGameUpdates(false);
  }, []);

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />

      <ViroARImageMarker
        target="level01"
        onAnchorFound={handleGameAnchorFound}
        pauseUpdates={pauseGameUpdates}
      >
        <ViroNode position={[0, 0, 0.05]} rotation={[0, 0, 0]}>
          <ThreeByOneBox materials={["stone"]} position={[0, 0, 0]} />
          {keyActive && <Key position={[0, 0, -0.01]} />}
        </ViroNode>
      </ViroARImageMarker>

      <ViroARImageMarker
        target="getKey"
        onAnchorFound={handleKeyAnchorFound}
        pauseUpdates={pauseKeyUpdates}
      />

      <ViroARImageMarker
        target="resetAll"
        onAnchorFound={handleReset}
        pauseUpdates={false}
      />

      <ViroARImageMarker
        target="level01_next"
        onAnchorFound={handleNextLevel}
        pauseUpdates={false}
      />

      <ViroQuad
        rotation={[-90, 0, 0]}
        position={[0, -1.6, 0]}
        width={5}
        height={5}
        arShadowReceiver
      />
    </ViroARScene>
  );
};

export default Level01;
