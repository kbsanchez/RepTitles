import React from 'react';
import { DataStore } from 'aws-amplify'
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import RepTitles from '../assets/RepTitles.png'

export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      <nav>
        <Button onClick={() => navigate('/')}>Home</Button>
        <Button onClick={() => navigate('/reptiles')}>
          Reptiles
        </Button>
        <Button onClick={() => navigate('/documents')}>
          Documents
        </Button>
        {route !== 'authenticated' ? (
          <Button onClick={() => navigate('/login')}>Login</Button>
        ) : (
          <Button onClick={async () => {
            await DataStore.clear()
            logOut()
          }}>Logout</Button>
        )}
      </nav>
      <Heading level={1}><img src={RepTitles} alt="RepTitles"/></Heading>
      <View>
        {route === 'authenticated' ? 'You are logged in' : 'Please Login'}
      </View>
      <Outlet />
    </>
  );
}