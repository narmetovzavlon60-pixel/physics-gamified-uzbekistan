import { mechanicsModule } from './mechanicsData';
import { opticsModule } from './opticsData';
import { thermoModule } from './thermoData';
import { electrodynamicsModule } from './electrodynamicsData';
import { quantumModule } from './quantumData';
import { advancedModule } from './advancedModule';
import type { PhysicsModule, PhysicsTopic } from '../types/physics';

export const physicsModules: PhysicsModule[] = [
  mechanicsModule,
  opticsModule,
  thermoModule,
  electrodynamicsModule,
  quantumModule,
  advancedModule
];

export const allTopics: PhysicsTopic[] = physicsModules.flatMap(m => m.topics);
