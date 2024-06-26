import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from 'react-router-dom'

//* Provider 객체를 사용하여 Redux Store를 전역으로 사용할 수 있도록 설정
import { Provider } from 'react-redux'
// 스토어 객체 참조
import store from './redux/store'

//전역정보 웹브라우저 스토리지에 저장하기 위한 redux-persist 추가설정
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
export let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
