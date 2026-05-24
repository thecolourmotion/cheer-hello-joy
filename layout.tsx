@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  --background: #001f3f;
  --foreground: #ffffff;
  --card: rgba(255, 255, 255, 0.05);
  --card-foreground: #ffffff;
  --popover: #001a35;
  --popover-foreground: #ffffff;
  --primary: #f7be3b;
  --primary-foreground: #001f3f;
  --secondary: rgba(255, 255, 255, 0.08);
  --secondary-foreground: #ffffff;
  --muted: rgba(255, 255, 255, 0.1);
  --muted-foreground: rgba(255, 255, 255, 0.6);
  --accent: #f7be3b;
  --accent-foreground: #001f3f;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: rgba(255, 255, 255, 0.12);
  --input: rgba(255, 255, 255, 0.08);
  --ring: #f7be3b;
  --radius: 0.5rem;
}

@theme inline {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Marquee animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

/* Pulse ring animation */
@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.animate-pulse-ring {
  animation: pulse-ring 1.5s ease-out infinite;
}

/* Gradient text */
.text-gradient-gold {
  background: linear-gradient(135deg, #f7be3b 0%, #ffd700 50%, #f7be3b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glow effects */
.glow-gold {
  box-shadow: 0 0 40px rgba(247, 190, 59, 0.4);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #001f3f;
}

::-webkit-scrollbar-thumb {
  background: rgba(247, 190, 59, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(247, 190, 59, 0.5);
}

/* Selection */
::selection {
  background: rgba(247, 190, 59, 0.3);
  color: #ffffff;
}
