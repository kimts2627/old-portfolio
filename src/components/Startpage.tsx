import React from 'react';

interface Startprops {};
interface Startstate {
  isBlank: boolean
};

class Startpage extends React.Component<Startprops, Startstate> {
  constructor(props: Startprops) {
    super(props);
    this.state = {
      isBlank: false
    };
    this.deleteAll = this.deleteAll.bind(this);
  }

  componentDidMount() {
    setTimeout(this.deleteAll, 2000);
  }

  public deleteAll() {
    this.setState({
      isBlank: true
    });
  }

  public render() {
    return (
      <div className={this.state.isBlank ? "Start-wrap-blank" : "Start-wrap"}>
        <h1 className="Start-name">Kim Taesu</h1>
        <p className="Start-desc">Frontend Developer</p>
      </div>
    )
  }
}




export default Startpage;
