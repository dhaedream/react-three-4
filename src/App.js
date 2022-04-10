import "./index.css";
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function App() {
  const ref = useRef();
  return (
    <div className="App">
      <Canvas>
        <mesh ref={ref}>
          <boxGeometry attach="geometry" args={[1, 1, 1]} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
