import React from 'react';

import './Footer.scss';

import LogoDiscord from '/src/images/logo-discord.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} All rights reserved “MidasTest”</p>

        <div className="discord">
          <p className="discord">Community and support channel:</p>
          <img src={LogoDiscord} alt="Logo Discord" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
