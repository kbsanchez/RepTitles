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
      <nav style={{borderBottom: '2px', borderColor: '#000000'}}>
        <Button variation='link' onClick={() => navigate('/')}>Home</Button>
        <Button variation='link' onClick={() => navigate('/reptiles')}>
          Reptiles
        </Button>
        <Button variation='link' onClick={() => navigate('/documents')}>
          Documents
        </Button>
        {route !== 'authenticated' ? (
          <Button variation='primary' onClick={() => navigate('/login')}>Login</Button>
        ) : (
          <Button variation='secondary' onClick={async () => {
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