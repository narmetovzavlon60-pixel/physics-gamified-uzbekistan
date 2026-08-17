import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '../types/physics';

interface GameState {
  xp: number;
  level: number;
  coins: number;
  streak: number;
  lastVisit: string;
  language: Language;
  inventory: string[];
  completedTopics: string[];
  completedQuizzes: string[];
  addXp: (amount: number) => void;
  addCoins: (amount: number) => void;
  toggleLanguage: () => void;
  purchaseItem: (itemId: string, cost: number) => boolean;
  completeTopic: (topicId: string, xp: number, coins: number) => void;
  completeQuiz: (quizId: string, xp: number, coins: number) => void;
  updateStreak: () => void;
}

function calcLevel(xp: number): number {
  return Math.floor(xp / 100) + 1;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      coins: 20,
      streak: 0,
      lastVisit: new Date().toISOString(),
      language: 'ru',
      inventory: [],
      completedTopics: [],
      completedQuizzes: [],
      addXp: (amount) => set((state) => {
        const xp = state.xp + amount;
        return { xp, level: calcLevel(xp) };
      }),
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
      toggleLanguage: () => set((state) => ({ language: state.language === 'ru' ? 'uz' : 'ru' })),
      purchaseItem: (itemId, cost) => {
        const state = get();
        if (state.coins >= cost && !state.inventory.includes(itemId)) {
          set({ coins: state.coins - cost, inventory: [...state.inventory, itemId] });
          return true;
        }
        return false;
      },
      completeTopic: (topicId, xp, coins) => {
        const state = get();
        if (!state.completedTopics.includes(topicId)) {
          set({
            completedTopics: [...state.completedTopics, topicId],
            xp: state.xp + xp,
            level: calcLevel(state.xp + xp),
            coins: state.coins + coins
          });
        }
      },
      completeQuiz: (quizId, xp, coins) => {
        const state = get();
        if (!state.completedQuizzes.includes(quizId)) {
          set({
            completedQuizzes: [...state.completedQuizzes, quizId],
            xp: state.xp + xp,
            level: calcLevel(state.xp + xp),
            coins: state.coins + coins
          });
        }
      },
      updateStreak: () => {
        const now = new Date();
        const last = new Date(get().lastVisit);
        const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
        let streak = get().streak;
        if (diffDays === 0) return;
        if (diffDays === 1) streak += 1;
        else streak = 1;
        set({ streak, lastVisit: now.toISOString() });
      }
    }),
    { name: 'physicuz-store' }
  )
);
