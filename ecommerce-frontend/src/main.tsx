
import MainLayout from '@layouts/MainLayout/MainLayout'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
//styles 
import '@styles/global.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
            <MainLayout />
    </BrowserRouter>
    

)
