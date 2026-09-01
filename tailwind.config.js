/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          neu: {
            bg: "#E8ECF2",
            text: "#4A5568",
            dark: "#2D3748",
          }
        },
        boxShadow: {
          // Выдавленная выпуклая плита (карточки, большие кнопки)
          'neu-raised': '10px 10px 20px #c5cbd6, -10px -10px 20px #ffffff',
          // Мягкая выпуклость (мелкие кнопки, бейджи)
          'neu-btn': '5px 5px 10px #c5cbd6, -5px -5px 10px #ffffff',
          // Вдавленный колодец (инпуты, треки, активные кнопки)
          'neu-inset': 'inset 4px 4px 8px #c5cbd6, inset -4px -4px 8px #ffffff',
          // Глубокий колодец
          'neu-inset-deep': 'inset 6px 6px 12px #b8c1d1, inset -6px -6px 12px #ffffff',
        }
      },
    },
    plugins: [],
  };