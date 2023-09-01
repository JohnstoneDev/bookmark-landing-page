/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily : {
      global : ['Rubik', 'sans-serif'],
    },
    fontSize : {
      'heading' : ['36px', {
            lineHeight : '40px',
            letterSpacing : '0px',
            fontWeight : '800',
          }
        ],
      'section' : ['24px', {
          lineHeight : '32px',
          letterSpacing : '0px',
          fontWeight : '600',
        }
      ],
    'button' : ['20px', {
          lineHeight : '28px',
          letterSpacing : '0px',
          fontWeight : '500',
        }
      ],
      'regular' : ['18px', {
          lineHeight : '28px',
          letterSpacing : '0px',
          fontWeight : '400',
        }
      ],
    },
    colors : {
      'whitish' : '#f5f5f5',
      'soft-blue' : 'hsl(231, 69%, 60%)',
      'soft-red' : 'hsl(0, 94%, 66%)',
      'grayish-blue' : 'hsl(229, 8%, 60%)',
      'very-dark-blue' : 'hsl(229, 31%, 21%)',
    },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
