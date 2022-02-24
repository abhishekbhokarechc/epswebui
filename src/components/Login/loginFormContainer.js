import React, { useState, useEffect } from 'react';
import LoginForm from 'ui-core/dist/LoginForm';
import './loginForm.scss';
import TextStyles from 'ui-core/dist/TextStyles';
import styled from 'styled-components/macro';
import chclogo from '../../assets/images/chc-logo.png';
import epslogo from '../../assets/images/eps-logo.png';
import line from '../../assets/images/Line.png';
import { useNavigate } from "react-router-dom";

const LoginContent = styled.div`
form {
    padding: 90px 48px 50px 48px;
}
  ${TextStyles.xSmall};
`;

function LoginFormContainer(props) {

    const navigate = useNavigate();
    const [usernameHasErrorVar, handleError] = useState(false);

    const callbackLogger = (e) => {
        console.log(e);
    }

    const onSubmit = (e) => {
        handleError((e) => { return e = true });
        props.usernameHasError = usernameHasErrorVar;
        //navigate('/homepage');
    }

    return (
        <div>
            <div className="d-flex align-content-center justify-content-center eps-chc-logo-div">
                <img src={chclogo}></img>
                <img src={line}></img>
                <img src={epslogo}></img>
            </div>
            <LoginContent>
            <div className="d-flex align-content-center justify-content-center eps-chc-error-div">
                <div className="errorContainer">
                    This is some error message This is some error message This is some error message This is some error message
                </div>
            </div>
            </LoginContent>
            
            <LoginContent>
                <LoginForm
                    domID="test-id"
                    dataTestId="test-loginHide"
                    title={''}
                    description={''}
                    usernameLabel={props.usernameLabel}
                    initialUsername={props.initialUsername}
                    initialPassword={props.initialPassword}
                    initialRememberMe={props.initialRememberMe}
                    onValidSubmit={onSubmit}
                    onInputChange={callbackLogger('onInputChange')}
                    usernameErrorMessage={props.usernameErrorMessage}
                    passwordErrorMessage={props.passwordErrorMessage}
                    usernameHasError={props.usernameHasError}
                    passwordHasError={props.passwordHasError}
                    hideForgotPassword={props.hideForgotPassword}
                    hideRememberMe={props.hideRememberMe}
                />
                <div className="login-footer">
                    Copyright ® 2004-2022 Change Healthcare LLC and/or one of its subsidiaries. All Rights Reserved. This software contains trade secrets and proprietary information of Change Healthcare and its subsidiaries and affiliates, and use of this software is governed by the terms and conditions of the respective licenses, service agreements, and other applicable agreements. All other uses of this software are expressly prohibited.
            </div>
            </LoginContent>
        </div>
    )
}

export default LoginFormContainer;
