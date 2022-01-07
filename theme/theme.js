import { useMemo, createContext } from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {

  const theme = useMemo(() =>
    createTheme({
      palette: {
        primary: {
          main: '#0C3990',
          white: '#fff',
        },
        secondary: {
          main: '#0c39904d',
        },
        background: {
          default: "#F8F8FF",
          paper: "#fff",
        },
        text: {
          primary: '#0C3990',
          secondary: '#0c39904d',
          white: '#fff',
          grey: '#e7e7e7',
        }
      },
      typography: {
        fontFamily: "SpaceGrotesk"
      }
    }), []);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};


export default ThemeContextProvider;