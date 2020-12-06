import React from 'react';

interface MainProps {
  portfolios: Array<object | any>,
  currentNum: number,
  isSidebarOn: boolean,
  isHover: boolean,
  handleCountPlusClick: () => void,
  handleCountMinusClick: () => void,
  handleMouseOver: () => void
}


function Main(props: MainProps) {
  const {portfolios, currentNum, isSidebarOn, isHover, handleCountPlusClick, handleMouseOver, handleCountMinusClick} = props;
  return (
    <main className="main-container">
      <div className="dummy" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
        <img className={isHover ? "img-hover" : "img"} src={portfolios[currentNum].pic} alt=""/>
        {isHover ?
        <div className="img-info">
          <p className="img-title">{portfolios[currentNum].title}</p>
          <p className="img-stack">{portfolios[currentNum].stack}</p>
          <p className="img-desc">{portfolios[currentNum].detail}</p>
        </div>
        : null}
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
