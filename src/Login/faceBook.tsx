import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response: any) => {
    console.log(response);
}

const FacebookLogins = () => {
    return (
        <div className="container">
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                 />
        </div>
    )
}

export default FacebookLogins;
