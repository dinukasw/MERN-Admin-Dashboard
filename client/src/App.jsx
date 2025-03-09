import React, { useSelector, useMemo } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material'
import { themeSettings } from 'theme'

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>App</h1>
      </ThemeProvider > 
    </div>
  )
}

export default App
