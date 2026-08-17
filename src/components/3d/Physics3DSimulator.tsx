import Pendulum3D from './Pendulum3D';
import Spring3D from './Spring3D';
import OpticsLens3D from './OpticsLens3D';
import WaveInterference3D from './WaveInterference3D';
import GasParticles3D from './GasParticles3D';
import BohrAtom3D from './BohrAtom3D';
import MagneticField3D from './MagneticField3D';

export default function Physics3DSimulator({ simulationType }: { simulationType: string }) {
  switch (simulationType) {
    case 'pendulum':
      return <Pendulum3D />;
    case 'spring':
      return <Spring3D />;
    case 'prism':
      return <OpticsLens3D />;
    case 'waves':
      return <WaveInterference3D />;
    case 'gas':
      return <GasParticles3D />;
    case 'bohr':
      return <BohrAtom3D />;
    case 'magnetic':
      return <MagneticField3D />;
    default:
      return <Pendulum3D />;
  }
}
