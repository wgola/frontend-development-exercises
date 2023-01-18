import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from "./routes.js"
import { Provider } from "react-redux"
import store from "./app/store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <RouterProvider router={router}/>
    </Provider>
);

