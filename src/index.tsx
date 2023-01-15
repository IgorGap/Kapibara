import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { ThemeProvider } from './app/themes/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <RecoilRoot>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>
)
