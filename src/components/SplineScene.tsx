import { ArchitecturalScene } from './ArchitecturalScene';

interface SplineSceneProps {
  className?: string;
}

export default function SplineScene({ className }: SplineSceneProps) {
  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      {/* استبدال الـ Spline المكسور بمشهد R3F المحلي الآمن والمستقر */}
      <ArchitecturalScene />
    </div>
  );
}