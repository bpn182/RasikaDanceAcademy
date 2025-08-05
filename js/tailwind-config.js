// Shared Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'serif': ['Cormorant Garamond', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            },
            colors: {
                'primary': {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    500: '#ec4899',
                    600: '#db2777',
                    700: '#be185d',
                },
                'gold': {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                },
                'rose': {
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'fadeInUp': 'fadeInUp 0.8s ease-out',
                'slideInLeft': 'slideInLeft 0.6s ease-out',
                'slideInRight': 'slideInRight 0.6s ease-out',
                'scaleIn': 'scaleIn 0.3s ease-out',
            }
        }
    }
};
