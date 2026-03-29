import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="rounded-lg border border-[#1E1E35] bg-[#1a1a2e] p-2 opacity-50">
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg border border-[#1E1E35] bg-[#1a1a2e] p-2 hover:bg-[#222238] transition-colors dark:border-[#1E1E35] dark:bg-[#1a1a2e] dark:hover:bg-[#222238]"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-[#7A8AB0]" />
      ) : (
        <Moon className="h-5 w-5 text-[#7A8AB0]" />
      )}
    </button>
  );
}
