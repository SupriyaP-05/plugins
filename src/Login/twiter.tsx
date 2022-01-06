import React from "react";
import ReactTwitterLogin from "react-twitter-login";
export default function TwitterLogin() {
    const authHandler = (error: any, data: any) => {
        if (error) return console.error(error);
        console.log(data);
    };
    return (
        <div className="container">
            <ReactTwitterLogin
                authCallback={authHandler}
                consumerKey="22soncp0obo2LJw2Klsh7WIZD" // We created this, remember?
                consumerSecret="aQzXhvMc1TvjHHWImduHedrRMiuNCvnv4iBBse2bmN4wyxnrFO" // We created this, remember?
                callbackUrl="http://localhost:3000/" // You set this up in the twitter app settings, remember?
            />
        </div>
    );
}