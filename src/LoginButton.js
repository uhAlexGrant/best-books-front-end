//import { render } from '@testing-library/react';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="outline-success"
      onClick={() => loginWithRedirect()}>login</Button>
  )


}

export default LoginButton;