import React from 'react';
import { useNavigate } from 'react-router';
import './Page404.scss';

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <section className="Section404">
      <div className="page404">
        <h1>404!</h1>
        <img src="../../../assets/Img/sad-doge.png" alt="doge" />
        <h2>This page was not found, but you can stay and pet our dog</h2>

        <button onClick={() => navigate('/')} className="btn "><b>Go Home</b></button>
      </div>
    </section>
  );
};

export default Page404;
