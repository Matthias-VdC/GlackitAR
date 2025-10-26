import { Viro3DObject } from "@reactvision/react-viro";
import { Viro3DPoint } from "@reactvision/react-viro/dist/components/Types/ViroUtils";
import React from "react";

interface KeyProps {
  position: Viro3DPoint;
}

const Key: React.FC<KeyProps> = ({ position }) => {
  return (
    <>
      <Viro3DObject
        source={require("../3d/key/source/model.gltf")}
        resources={[require("../3d/key/textures/gltf_embedded_0.png")]}
        type="GLTF"
        position={[position[0], position[1], position[2] - 0.01]}
        scale={[0.01, 0.01, 0.01]}
        rotation={[90, 90, 0]}
        animation={{
          name: "animateIdleKey",
          loop: true,
          run: true,
          delay: 0,
        }}
      />
    </>
  );
};

export default Key;
