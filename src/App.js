import { Authenticator } from '@aws-amplify/ui-react';

import { Reptiles } from './components/Reptiles/Reptiles';
import { RequireAuth } from './RequireAuth';
import { Login } from './components/Login';
import { Documents } from './components/Documents/Documents';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/reptiles"
            element={
              <RequireAuth>
                <Reptiles />
              </RequireAuth>
            }
          />
          <Route
            path="/documents"
            element={
              <RequireAuth>
                <Documents />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;