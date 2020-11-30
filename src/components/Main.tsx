import React from 'react';

interface MainProps {
  portfolios: Array<object>
}

function Main(props: MainProps) {
  const {portfolios} = props;
  return (
    <main className="main-container">
      <div className="dummy"/>
      <div className="main-left"/>
      <div className="main-right"/>
      <footer className="scrollbar">
        {portfolios.map((el: any) => <p className="scrollbar-el" key={el.id}>I</p>)}
      </footer>
    </main>
  )
}

export default Main;
