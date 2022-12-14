/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'verde': '#318031',
        'blanco': '#FFF',
        'dorado': '#C6A64E',
        'rosa': '#ECC8C3',
        'beige': '#D1BFA3',
        'back': '#F8F5F5',
      },
      fontFamily: {
        'fontPrincipal':['tangerine', 'handwriting'],
        'fontText':['cormorant sc', 'serif'],
      },
      screens: {
        'lg': '1184px',
        'md': '960px',
        '765min': '765px',
        '768min': '768px',
        '480': {'max': '480px'},
        '480min': '480px',
        '1184max': {'max': '1184px'},
        '960max': {'max': '960px'},
        '765max': {'max': '765px'},
      },
      width: {
        '18': '72px',
        '19': '76px',
        '340px': '340px',
        '400px': '400px',
        '490px': '490px',
        'inherit': 'inherit',
      },
      height: {
        '76px': '76px',
        '27.5': '110px',
        '35.5': '142px',
        '274px': '274px',
        '250px': '250px',
        '300px': '300px',
      },
      minHeight: {
        '24px': '24px',
        '32px': '32px',
        '40px': '40px',
        '50px': '50px',
        '20': '80px',
        '142px': '142px',
      },
      minWidth: {
        '8': '32px',
        '340px': '340px',
        '20': '80px',
        '35.5': '142px',
        '36': '144px',
        '40px': '40px',
        '50px': '50px',
        '450px': '450px',
      },
      maxWidth: {
        '35.5': '142px',
        '960px': '960px',
        '250px': '250px',
        '340px': '340px',
        '450px': '450px',
        '480px': '480px',
        '490px': '490px',
        '98%': '98%',
      },
      borderWidth: {
        
        '60px': '60px',
        '480px': '480px',
      },
      rotate: {
        '360': '360deg',
      },
      borderRadius: {
        '50%': '50%',
        '100%': '100%',
      },
      margin: {
        '104px': '104px',
      },
      flex: {
        '1-100': '1 1 100%',
        '5-1-0': '5 1 0%',
        '2-1-0': '2 1 0%',
      },
      flexGrow: {
        '2': '2'
      },
      spacing: {
        '17': '68px',
        '18': '72px',
        '19': '76px',
      },
      backgroundImage: {
        'pattern': "url('https://i.ibb.co/vH1TrPx/Group23.png')",
      },
    },
  },
  plugins: [],
}
