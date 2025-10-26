import React from "react";
import {
  ViroARScene,
  ViroAmbientLight,
  ViroARImageMarker,
  ViroNode,
  ViroQuad,
  ViroBox,
  Viro3DObject,
} from "@reactvision/react-viro";

//@ts-ignore:next-line
const Level04 = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />

      <ViroARImageMarker target="level04" pauseUpdates={false}>
        <ViroNode position={[0, 0, 0.05]} rotation={[0, 0, 0]}>
          <ViroBox
            position={[-0.015, 0, 0]}
            scale={[0.015, 0.015, 0.015]} // height, depth, width (meters)
            materials={["stone"]}
          />
          <ViroBox
            position={[0, 0, 0]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[0.015, 0, 0]}
            scale={[0.015, 0.015, 0.015]}
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

export default Level04;
