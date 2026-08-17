import Physics3DSimulator from './3d/Physics3DSimulator';
import { useGameStore } from '../store/useGameStore';
import { playSound } from '../utils/sound';

export default function SimulationModal({ simulationType, onClose }: { simulationType: string; onClose: () => void }) {
  const { language } = useGameStore();
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/80 p-4" onClick={() => { playSound('click'); onClose(); }}>
      <div className="w-full max-w-lg rounded-xl bg-slate-800 p-4" onClick={e => e.stopPropagation()}>
        <button onClick={() => { playSound('click'); onClose(); }} className="float-right text-slate-400">✕</button>
        <h3 className="mb-4 text-lg font-bold">🔬 {language === 'ru' ? '3D симуляция' : '3D simulyatsiya'}</h3>
        <div className="h-80 rounded overflow-hidden">
          <Physics3DSimulator simulationType={simulationType} />
        </div>
      </div>
    </div>
  );
}
