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
import Level04 from "./Level04";

//@ts-ignore:next-line
const Level03 = ({ sceneNavigator }) => {
  const handleNextLevel = useCallback(() => {
    setTimeout(() => {
      sceneNavigator.push({ scene: Level04 });
    }, 500);
  }, [sceneNavigator]);

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />

      <ViroARImageMarker target="level03" pauseUpdates={false}>
        <ViroNode position={[0, 0, 0.05]} rotation={[0, 0, 0]}>
          <ViroBox
            position={[-0.075, 0, 0.055]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, 0.055]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.075, 0, 0.04]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, 0.04]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.075, 0, 0.025]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, 0.025]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.075, 0, 0.01]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, 0.01]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.075, 0, -0.005]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, -0.005]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.075, 0, -0.02]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, -0.02]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.075, 0, -0.035]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, -0.035]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.075, 0, -0.05]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, -0.05]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.075, 0, -0.065]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, -0.065]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.075, 0, -0.08]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />
          <ViroBox
            position={[-0.06, 0, -0.08]}
            scale={[0.015, 0.015, 0.015]}
            materials={["stone"]}
          />



          <ViroBox
            position={[-0.105, 0, -0.1]}
            scale={[0.015, 0.015, 0.005]}
            materials={["stone"]}
          />


          <ViroBox
            position={[-0.12, 0, -0.01]}
            scale={[0.015, 0.015, 0.005]}
            materials={["stone"]}
          />


          <Viro3DObject
            source={require("../3d/spike/scene.gltf")}
            resources={[
              require("../3d/spike/scene.bin"),
              require("../3d/spike/textures/Ice_Wights.001_baseColor.png"),
              require("../3d/spike/textures/Ice_Wights.001_normal.png"),
            ]}
            type="GLTF"
            position={[-0.045, 0.01, 0.055]}
            scale={[2, 2, 2]}
            rotation={[-90, 0, 0]}
          />
          <Viro3DObject
            source={require("../3d/spike/scene.gltf")}
            resources={[
              require("../3d/spike/scene.bin"),
              require("../3d/spike/textures/Ice_Wights.001_baseColor.png"),
              require("../3d/spike/textures/Ice_Wights.001_normal.png"),
            ]}
            type="GLTF"
            position={[-0.03, 0.01, 0.055]}
            scale={[2, 2, 2]}
            rotation={[-90, 0, 0]}
          />
          <Viro3DObject
            source={require("../3d/spike/scene.gltf")}
            resources={[
              require("../3d/spike/scene.bin"),
              require("../3d/spike/textures/Ice_Wights.001_baseColor.png"),
              require("../3d/spike/textures/Ice_Wights.001_normal.png"),
            ]}
            type="GLTF"
            position={[-0.015, 0.01, 0.055]}
            scale={[2, 2, 2]}
            rotation={[-90, 0, 0]}
          />
          <Viro3DObject
            source={require("../3d/spike/scene.gltf")}
            resources={[
              require("../3d/spike/scene.bin"),
              require("../3d/spike/textures/Ice_Wights.001_baseColor.png"),
              require("../3d/spike/textures/Ice_Wights.001_normal.png"),
            ]}
            type="GLTF"
            position={[0, 0.01, 0.055]}
            scale={[2, 2, 2]}
            rotation={[-90, 0, 0]}
          />

          <Viro3DObject
            source={require("../3d/spike/scene.gltf")}
            resources={[
              require("../3d/spike/scene.bin"),
              require("../3d/spike/textures/Ice_Wights.001_baseColor.png"),
              require("../3d/spike/textures/Ice_Wights.001_normal.png"),
            ]}
            type="GLTF"
            position={[0.1, 0.01, 0.055]}
            scale={[2, 2, 2]}
            rotation={[-90, 0, 0]}
          />
          <Viro3DObject
            source={require("../3d/spike/scene.gltf")}
            resources={[
              require("../3d/spike/scene.bin"),
              require("../3d/spike/textures/Ice_Wights.001_baseColor.png"),
              require("../3d/spike/textures/Ice_Wights.001_normal.png"),
            ]}
            type="GLTF"
            position={[0.085, 0.01, 0.055]}
            scale={[2, 2, 2]}
            rotation={[-90, 0, 0]}
          />



          <Viro3DObject
            source={require("../3d/spike/scene.gltf")}
            resources={[
              require("../3d/spike/scene.bin"),
              require("../3d/spike/textures/Ice_Wights.001_baseColor.png"),
              require("../3d/spike/textures/Ice_Wights.001_normal.png"),
            ]}
            type="GLTF"
            position={[0.055, 0.01, 0.025]}
            scale={[2, 2, 2]}
            rotation={[-90, 0, 0]}
          />
          <Viro3DObject
            source={require("../3d/spike/scene.gltf")}
            resources={[
              require("../3d/spike/scene.bin"),
              require("../3d/spike/textures/Ice_Wights.001_baseColor.png"),
              require("../3d/spike/textures/Ice_Wights.001_normal.png"),
            ]}
            type="GLTF"
            position={[0.04, 0.01, 0.025]}
            scale={[2, 2, 2]}
            rotation={[-90, 0, 0]}
          />



          <Viro3DObject
            source={require("../3d/key/source/model.gltf")}
            resources={[require("../3d/key/textures/gltf_embedded_0.png")]}
            type="GLTF"
            position={[0.047, 0.01, 0.005]}
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
        target="level04"
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

export default Level03;
