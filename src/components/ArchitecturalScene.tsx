import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Environment } from '@react-three/drei';

// مكون مخصص لتحميل وعرض النموذج الحقيقي
function LoadedModel() {
  const { scene } = useGLTF('/models/luxury_villa.glb');

  return (
    <Center>
      {/* تم تعديل الـ scale ليكون 1 افتراضياً، وسيتم توسيطه تلقائياً */}
      <primitive object={scene} scale={1} />
    </Center>
  );
}

export function ArchitecturalScene() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-auto">
      <Canvas 
        camera={{ position: [8, 5, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* إضاءة أساسية موجهة */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} color="#fffbf5" />

        {/* 🌟 السر في ظهور وتجسيد خامات الـ 3D الواقعية: إضاءة البيئة الانعكاسية */}
        <Environment preset="city" />

        {/* Suspense يضمن عرض المشهد بسلاسة بمجرد انتهاء التحميل */}
        <Suspense fallback={null}>
          <LoadedModel />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2.1} 
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.4}
          autoRotate // دوران هادئ وبطيء للمجسم ليمنح حيوية للقسم
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

// تحميل مسبق للنموذج
useGLTF.preload('/models/luxury_villa.glb');