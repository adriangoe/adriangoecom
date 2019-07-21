import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'

const typography = new Typography({
  baseFontSize: '16px',
  bodyFontFamily: [
   'DM Sans',
   'sans-serif',
  ],
  // baseLineHeight: 1.45,
  // headerWeight: 700,
  googleFonts: [
    {
      name: 'DM Sans',
      styles: [
        '400',
        '700',
      ],
    },
    {
      name: 'DM Serif Display',
      styles: [
        '400',
      ],
    },
  ],
  headerFontFamily: [
   'DM Serif Display',
   'serif',
  ],
  title: 'AdrianGoe',
  })

export default typography