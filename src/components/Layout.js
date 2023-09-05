import React from 'react';
import { DataStore } from 'aws-amplify'
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View, Alert } from '@aws-amplify/ui-react';
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
      <View marginBottom="2vh">
        {route === 'authenticated' &&
        <Alert
        variation="success"
        isDismissible={true}
        hasIcon={true}
        heading="Login Confirmation">
        You have successfully logged in.
        </Alert>}
        {route !== 'authenticated' &&
        <Alert
        variation="info"
        isDismissible={true}
        hasIcon={true}
        heading="Not Logged In">
        Sign in to embrace the RepTitles revolution.
        </Alert>}
      </View>
      <Outlet />
    </>
  );
}