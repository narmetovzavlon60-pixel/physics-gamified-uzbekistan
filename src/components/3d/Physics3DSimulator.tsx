import Pendulum3D from './Pendulum3D';
import OpticsLens3D from './OpticsLens3D';
import GasParticles3D from './GasParticles3D';
import BohrAtom3D from './BohrAtom3D';

export default function Physics3DSimulator({ moduleId }: { moduleId: string }) {
  switch (moduleId) {
    case 'mechanics':
      return <Pendulum3D />;
    case 'optics':
      return <OpticsLens3D />;
    case 'thermo':
      return <GasParticles3D />;
    case 'quantum':
      return <BohrAtom3D />;
    default:
      return <Pendulum3D />;
  }
}
