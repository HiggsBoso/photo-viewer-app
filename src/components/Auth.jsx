import React from 'react';

const Auth = (props) => {
  const { redirect_uri } = props;
  const { scope } = props;
  const appId = 6233788;
  return (
    <div className="vk-auth">
      <a href={`https://oauth.vk.com/authorize?client_id=${appId}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=token`}>
        <img src="images/vk-logo.png" width="70" height="70"></img>
      </a>
    </div>
  );
}

export default Auth;
