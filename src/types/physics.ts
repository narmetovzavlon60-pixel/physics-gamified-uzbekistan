export type Language = 'ru' | 'uz';

export interface LocalizedText {
  ru: string;
  uz: string;
}

export interface Formula {
  id: string;
  latex: string;
  description: LocalizedText;
}

export interface QuizQuestion {
  id: string;
  difficulty: 1 | 2 | 3;
  question: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
  explanation?: LocalizedText;
}

export interface PhysicsTask {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  difficulty: 1 | 2 | 3;
  xpReward: number;
  coinReward: number;
  formulas: string[];
  answer?: number;
  tolerance?: number;
}

export interface PhysicsTopic {
  id: string;
  moduleId: string;
  title: LocalizedText;
  summary: LocalizedText;
  details?: LocalizedText;
  formulas: Formula[];
  tasks: PhysicsTask[];
  quiz: QuizQuestion[];
  hasSimulation?: boolean;
}

export interface PhysicsModule {
  id: string;
  title: LocalizedText;
  icon: string;
  color: string;
  summary?: LocalizedText;
  topics: PhysicsTopic[];
}

export interface InventoryItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  cost: number;
  type: 'avatar' | 'theme' | 'powerup' | 'title';
  effect?: string;
}
