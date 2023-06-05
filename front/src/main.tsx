import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./Context/userContext"
import { ContactProvider } from "./Context/contactContext"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContactProvider>
          <App/>
        </ContactProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)