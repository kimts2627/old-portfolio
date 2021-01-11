import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Startpage from './components/Startpage';

setTimeout(   // ------------------- 입장 페이지 진행 후 약 3초후 메인 페이지 렌더
  renderMain,
  3000
)

function renderMain() {
  return(
    ReactDOM.render(
      <App/>,
      document.getElementById('root')
    )
  )
}

ReactDOM.render(
  <Startpage/>,
  document.getElementById('root')
);
