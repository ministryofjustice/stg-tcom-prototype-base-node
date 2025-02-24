import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'govuk-frontend/dist/govuk/govuk-frontend.min.css'

createRoot(document.getElementById("root")!).render(<App />);
