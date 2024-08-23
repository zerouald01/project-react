

import { createRoot } from 'react-dom/client'
//redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistore} from '@redux/store'
//styles 
import '@styles/global.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from '@routes/App'

createRoot(document.getElementById('root')!).render(
        <Provider store={store}>
                <PersistGate loading={null} persistor={persistore}> 
                        <App />
                </PersistGate>     
        </Provider>   
)
