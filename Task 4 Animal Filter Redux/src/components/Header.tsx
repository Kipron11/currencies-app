import React from 'react';

const Header = () => (
  <section className="header">
    <button onClick={() => localStorage.clear()} className="logo">Logo</button>
  </section>
);

export default Header;
