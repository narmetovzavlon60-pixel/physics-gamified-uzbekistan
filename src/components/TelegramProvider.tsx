import { useEffect, type ReactNode } from 'react';

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
        setHeaderColor?: (color: string) => void;
        setBackgroundColor?: (color: string) => void;
        themeParams?: {
          bg_color?: string;
          text_color?: string;
          button_color?: string;
          button_text_color?: string;
        };
      };
    };
  }
}

export default function TelegramProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready?.();
      tg.expand?.();
      if (tg.themeParams) {
        document.documentElement.style.setProperty('--tg-bg', tg.themeParams.bg_color || '#0b1120');
        document.documentElement.style.setProperty('--tg-text', tg.themeParams.text_color || '#ffffff');
        document.documentElement.style.setProperty('--tg-button', tg.themeParams.button_color || '#3b82f6');
      }
    }
  }, []);

  return <>{children}</>;
}
