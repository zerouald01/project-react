

import { createRoot } from 'react-dom/client'

//styles 
import '@styles/global.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from '@routes/App'

createRoot(document.getElementById('root')!).render(
        <App />
)
