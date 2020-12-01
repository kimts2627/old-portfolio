import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import  Sidebar from './Sidebar';
import  Main from './Main';
import  Title from './Title';
import MyImg from './images/IMG_1786.jpeg';
import TodoImg from './images/todo.png';
import '../App.css';

interface Props {};
interface State {
  isSidebarOn: boolean,
  portfolios: Array<object>,
  currentNum: number
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
          "pic": MyImg
        },
        {
          "id": 2,
          "title": "Todo List App",
          "stack": "HTML/CSS/React/JS",
          "detail": "JSX의 기본 문법을 활용한 Todo App 입니다.\n다양한 디바이스를 통해 이용 가능하게 3단 레이아웃 반응형으로 제작 하였습니다.",
          "pic": TodoImg
        },
        {
          "id": 3,
          "title": "Todo List App",
          "stack": "HTML/CSS/React/JS",
          "detail": "JSX의 기본 문법을 활용한 Todo App 입니다.\n다양한 디바이스를 통해 이용 가능하게 3단 레이아웃 반응형으로 제작 하였습니다.",
          "pic": MyImg
        }
      ],
      currentNum: 0
    }
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleCountPlusClick = this.handleCountPlusClick.bind(this);
    this.handleCountMinusClick = this.handleCountMinusClick.bind(this);
  }

  componentDidUpdate() {
    
  }

  private handleProfileClick(): void {
    this.setState({ isSidebarOn: !this.state.isSidebarOn });
  }

  private handleCountPlusClick(): void {
    if(this.state.currentNum < this.state.portfolios.length - 1) {
      this.setState(preState => ({
        currentNum: preState.currentNum + 1 
      }));
    }
  }

  private handleCountMinusClick(): void {
    if(this.state.currentNum > 0) {
      this.setState(prevState => ({
        currentNum: prevState.currentNum - 1
      }));
    }
  }

  public render() {
    return (
      <div className='App'>
        <Sidebar isSidebarOn={this.state.isSidebarOn} handleProfileClick={this.handleProfileClick}/>
        <Main
        portfolios={this.state.portfolios}
        currentNum={this.state.currentNum}
        isSidebarOn={this.state.isSidebarOn}
        handleCountPlusClick={this.handleCountPlusClick}
        handleCountMinusClick={this.handleCountMinusClick}
        />
        <Title />
        <div className="Title-power">Powered By React and TypeScript</div>
        
        <div className="Title-profile" onClick={this.handleProfileClick}>
          {this.state.isSidebarOn ? null : "Profile"}
        </div>
        <div className="Title-name">Kim Taesu</div>
      </div>
    );
  }
}
export default App;
