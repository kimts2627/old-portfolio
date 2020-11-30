import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  Sidebar from './Sidebar';
import  Main from './Main';
import  Title from './Title';
import  Nav from './Nav';
import '../App.css';

interface Props {};
interface State {
  isSidebarOn: boolean,
  portfolios: Array<object>
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSidebarOn: false,
      portfolios: [
        {
          "id": 1,
          "title": "Todo List App",
          "stack": "HTML/CSS/React/JS",
          "detail": "JSX의 기본 문법을 활용한 Todo App 입니다.\n다양한 디바이스를 통해 이용 가능하게 3단 레이아웃 반응형으로 제작 하였습니다.",
          "pic": "./image/todo.png"
        }
      ]
    }
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  private handleProfileClick(): void {
    this.setState({ isSidebarOn: !this.state.isSidebarOn })
  }

  public render() {
    return (
      <div className='App'>
        <Sidebar isSidebarOn={this.state.isSidebarOn} handleProfileClick={this.handleProfileClick}/>
        <Main />
        <Title />
        <Nav />
        <div className="Title-power">Powered By React and TypeScript</div>
        <div className="Title-profile" onClick={this.handleProfileClick}>
          Profile
        </div>
        <div className="Title-name">Kim Taesu</div>
      </div>
    );
  }
}
export default App;
