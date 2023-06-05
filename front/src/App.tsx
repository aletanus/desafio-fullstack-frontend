import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./assets/Pages/Login"
import { RegisterPage } from "./assets/Pages/Register"
import { DashboardPage } from "./assets/Pages/Dashboard"
import { NotFoundPage } from "./assets/Pages/NotFound"
import React, { useState } from "react"
import { ToastContainer } from "react-toastify"
import { GlobalStyle } from "./Styles/Global-styles"
import { ProtectedRoutes } from "./Rotas/protectedRoutes"

const App = () => {

  const localStorageLoggedUser = localStorage.getItem("@LOGGED-USER")
  const [loggedUser, setLoggedUser] = useState(localStorageLoggedUser ? JSON.parse(localStorageLoggedUser) : [])

  return (

    <div className="App">

      <Routes>
        <Route path="/" element= {<LoginPage/>} />
        <Route path="/register" element= {<RegisterPage/>} />

        <Route element={ <ProtectedRoutes/> }>
          <Route path="/dashboard" element= {<DashboardPage/>} />
        </Route>

        <Route path="*" element= {<NotFoundPage/>} />
      </Routes>

      <GlobalStyle/>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </div>

  )
}

export default App