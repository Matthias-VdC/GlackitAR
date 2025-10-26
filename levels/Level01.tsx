import React, { useCallback } from "react";
import {
  ViroARScene,
  ViroAmbientLight,
  ViroARImageMarker,
  ViroNode,
  ViroQuad,
  ViroBox,
  Viro3DObject,
} from "@reactvision/react-viro";
import Level02 from "./Level02";

//@ts-ignore:next-line
const Level01 = ({ sceneNavigator }) => {
  const handleNextLevel = useCallback(() => {
    setTimeout(() => {
      sceneNavigator.push({ scene: Level02 });
    }, 500);
  }, [sceneNavigator]);

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />

      <ViroARImageMarker target="level01" pauseUpdates={false}>
        <ViroNode position={[0, 0, 0.05]} rotation={[0, 0, 0]}>
          <ViroBox
            position={[-0.015, 0, 0]}
            scale={[0.01, 0.01, 0.01]} // height, depth, width (meters)
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.005, 0, 0]}
            scale={[0.01, 0.01, 0.01]}
            materials={["stone"]}
          />
          <ViroBox
            position={[0.005, 0, 0]}
            scale={[0.01, 0.01, 0.01]}
            materials={["stone"]}
          />
          <Viro3DObject
            source={require("../3d/key/source/model.gltf")}
            resources={[require("../3d/key/textures/gltf_embedded_0.png")]}
            type="GLTF"
            position={[0, 0, -0.01]}
            scale={[0.01, 0.01, 0.01]}
            rotation={[90, 90, 0]}
            animation={{
              name: "animateIdleKey",
              loop: true,
              run: true,
              delay: 0,
            }}
          />
        </ViroNode>
      </ViroARImageMarker>

      <ViroARImageMarker
        target="level02"
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
