import React from "react";
import ReactFacebookLogin from "react-facebook-login";
import ReactGoogleLogin from "react-google-login";

export default function GoogleLogin(props: any) {
    const onResponse = (resp: any) => {
        console.log(resp);
    };
    return (
        <div className="container">
            <ReactGoogleLogin
                clientId="880877756764-lncsjvqnce15nb98stnc5poggf2o2ivd.apps.googleusercontent.com" // We created this earlier, remember?
                buttonText="Login with Google"
                onSuccess={onResponse}
                onFailure={onResponse}
            />
        </div>
    );
}
