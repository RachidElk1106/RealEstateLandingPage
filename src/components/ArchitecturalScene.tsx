import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

// مكون مخصص لتحميل وعرض النموذج الحقيقي
function LoadedModel() {
  // استبدل المسار أدناه باسم ملف الـ glb الخاص بك تماماً
  const { scene } = useGLTF('/models/luxury_villa.glb');

  return (
    <Center>
      <primitive object={scene} scale={0.3} />
    </Center>
  );
}

export function ArchitecturalScene() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-auto">
      <Canvas 
        camera={{ position: [5, 3, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* إضاءة محيطية وتوجيهية لإبراز تفاصيل التصميم الواقعي */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 15, 10]} intensity={2.5} color="#fffbf5" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        {/* Suspense يضمن عرض المشهد بسلاسة بمجرد انتهاء التحميل */}
        <Suspense fallback={null}>
          <LoadedModel />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

// تحميل مسبق للлуч
useGLTF.preload('/models/luxury_villa.glb');
