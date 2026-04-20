import { StrictMode } from 'react'
// StrictMode - помогает обнаружить потенциальные проблемы во время разработки, не используемые хуки
import { createRoot } from 'react-dom/client'
// createRoot - функция которая отвечает за рендеринг и отрисовку нашего приложения
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
