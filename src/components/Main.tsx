import React from 'react';
import ImgSrc from './images/IMG_1786.jpeg';

interface MainProps {
  portfolios: Array<object | any>,
  currentNum: number,
  isSidebarOn: boolean,
  handleCountPlusClick: () => void,
  handleCountMinusClick: () => void
}

function Main(props: MainProps) {
  const {portfolios, currentNum, isSidebarOn, handleCountPlusClick, handleCountMinusClick} = props;
  return (
    <main className="main-container">
      <div className="dummy">
        <img src={portfolios[currentNum].pic} alt=""/>
      </div>
      <div className="main-left" onClick={isSidebarOn ? undefined : handleCountMinusClick}/>
      <div className="main-right" onClick={isSidebarOn ? undefined : handleCountPlusClick}/>
      <footer className="scrollbar">
        {portfolios.map((el: any, index: number) => index === currentNum ? <p className="scrollbar-el-up" key={el.id}>I</p> : <p className="scrollbar-el" key={el.id}>I</p>)}
      </footer>
    </main>
  )
}

export default Main;
