// import { FC, ReactElement, ReactNode } from 'react'
// import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

// import palette from './palette'
// import components from './components'


// const theme = createTheme({
//   palette,
//   shape: { borderRadius: 8 },
//   components: {
//     ...components,
//     MuiCssBaseline: {
//       styleOverrides: () => ({
//         body: {
//           height: '100vh',
//         },
//         '#root': {
//           height: '100vh',
//         },
//       }),
//     },
//   },
// })

// type Props = {
//   children: ReactElement[]
// }
// export type FCC<P = {}> = FC<P & { children?: ReactNode }>

// export const ThemeProvider: FCC = ({ children }) => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     {children}
//   </ThemeProvider>
// )


// export const ThemeProvider: FCC = ({ children }) => (
//   <Mui.ThemeProvider theme={theme}>
//     <Mui.CssBaseline />
//     {children}
//   </Mui.ThemeProvider>
// )

// export type FCC<P = {}> = FC<P & { children?: ReactNode }>

import * as Mui from '@mui/material'
import palette from './palette'
import components from './components'
import { FC, ReactNode } from 'react'

const theme = Mui.createTheme({
  palette,
  shape: { borderRadius: 8 },
    components: {
    ...components,
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          height: '100vh',
          backgroundColor: '#e9e9e9'
        },
        '#root': {
          height: '100vh',
        },
      }),
    },
  },
})
  



export type FCC<P = {}> = FC<P & { children?: ReactNode }>

export const ThemeProvider: FCC = ({ children }) => (
  <Mui.ThemeProvider theme={theme}>
    <Mui.CssBaseline />
    {children}
  </Mui.ThemeProvider>
)
