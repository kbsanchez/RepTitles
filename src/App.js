import { Authenticator, Button } from '@aws-amplify/ui-react';

import { Reptiles } from './components/Reptiles/Reptiles';
import { RequireAuth } from './RequireAuth';
import { Login } from './components/Login';
import { Documents } from './components/Documents/Documents';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout';
import { About } from './components/Footer/About'
import { ContactUs } from './components/Footer/ContactUs'
import { PrivacyPolicy } from './components/Footer/PrivacyPolicy'

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
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="*" element={<NoMatch />} />
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

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Button variation='primary' to="/">Go to the home page</Button>
      </p>
    </div>
  );
}