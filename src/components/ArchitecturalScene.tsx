import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface ArchitecturalSceneProps {
  viewMode: 'exterior' | 'interior';
  timeMode: 'day' | 'night';
}

function CameraController({ viewMode }: { viewMode: 'exterior' | 'interior' }) {
  const { camera } = useThree();

  const targetPosition = viewMode === 'exterior'
    ? new THREE.Vector3(10, 6, 12)
    : new THREE.Vector3(1.5, 2.2, 3.5);

  const targetLookAt = viewMode === 'exterior'
    ? new THREE.Vector3(0, 1, 0)
    : new THREE.Vector3(0, 1.5, 0);

  useFrame(() => {
    camera.position.lerp(targetPosition, 0.04);
    camera.lookAt(targetLookAt);
  });

  return null;
}

function BuildingModel({ timeMode }: { timeMode: 'day' | 'night' }) {
  const { scene } = useGLTF('/models/luxury_villa.glb'); 

  return (
    <group>
      <primitive object={scene} scale={0.8} position={[0, -1, 0]} />

      {timeMode === 'night' && (
        <group>
          <pointLight position={[2, 3, 2]} intensity={12} color="#ffb066" distance={8} />
          <pointLight position={[-2, 2, -1]} intensity={8} color="#ff9944" distance={6} />
          <spotLight position={[0, 4, 0]} intensity={15} color="#ffd1a3" angle={0.8} penumbra={1} />
        </group>
      )}
    </group>
  );
}

export default function ArchitecturalScene({ viewMode, timeMode }: ArchitecturalSceneProps) {
  const isNight = timeMode === 'night';

  return (
    <Canvas
      shadows
      camera={{ position: [10, 6, 12], fov: 45 }}
      className="w-full h-full bg-transparent"
    >
      {/* تحكم بالدوران بالماوس */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2 - 0.05}
        minPolarAngle={Math.PI / 6}
        rotateSpeed={0.5}
      />

      {/* متحكم حركة الكاميرا */}
      <CameraController viewMode={viewMode} />

      {/* لون الخلفية المتغير حسب الوقت */}
      <color attach="background" args={[isNight ? '#090b10' : '#121212']} />

      {/* إضاءة البيئة المحيطة */}
      <Environment preset={isNight ? 'night' : 'city'} environmentIntensity={isNight ? 0.25 : 0.8} />

      {/* الإضاءة الشمسية / القمرية الرئيسية */}
      <ambientLight intensity={isNight ? 0.2 : 0.6} color={isNight ? '#405070' : '#ffffff'} />
      <directionalLight
        position={isNight ? [-8, 6, -5] : [12, 15, 8]}
        intensity={isNight ? 0.35 : 1.8}
        color={isNight ? '#88aaff' : '#fff5ea'}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* نموذج الفيلا */}
      <BuildingModel timeMode={timeMode} />

      {/* ظلال متفاعلة على الأرضية */}
      <ContactShadows
        position={[0, -1, 0]}
        opacity={isNight ? 0.3 : 0.6}
        scale={20}
        blur={2}
        far={4}
      />
    </Canvas>
  );
}