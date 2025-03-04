import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { QuizProvider } from './Context/QuizeContext.jsx'
createRoot(document.getElementById('root')).render(
    <QuizProvider>
    <App />
    </QuizProvider>
)
