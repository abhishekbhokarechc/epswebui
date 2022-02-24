import React from 'react';
import LoginFormContainer from './loginFormContainer';

function LoginContainer() {
    return (
        <div>
            <LoginFormContainer 
            usernameLabel={'Username'} 
            hideForgotPassword={true} 
            hideRememberMe={true}
            usernameHasError={false}
            usernameErrorMessage="Invalid username & password"/>
        </div>
    )
}

export default LoginContainer
