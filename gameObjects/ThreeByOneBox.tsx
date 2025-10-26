import { ViroBox } from "@reactvision/react-viro";
import { Viro3DPoint } from "@reactvision/react-viro/dist/components/Types/ViroUtils";
import React from "react";

interface ThreeByOneBoxProps {
  materials: string[];
  position: Viro3DPoint;
}

// origin is in the center block
const ThreeByOneBox: React.FC<ThreeByOneBoxProps> = ({
  materials,
  position,
}) => {
  return (
    <>
      <ViroBox
        position={[position[0] - 0.015, position[1], position[2]]}
        scale={[0.015, 0.015, 0.015]} // height, depth, width (meters)
        materials={materials}
      />
      <ViroBox
        position={position}
        scale={[0.015, 0.015, 0.015]}
        materials={materials}
      />
      <ViroBox
        position={[position[0] + 0.015, position[1], position[2]]}
        scale={[0.015, 0.015, 0.015]}
        materials={materials}
      />
    </>
  );
};

export default ThreeByOneBox;
