import React from 'react';

interface Startprops {};
interface Startstate {

};

class Startpage extends React.Component<Startprops, Startstate> {
  constructor(props: Startprops) {
    super(props)
  }



  public render() {
    return (
      <div className="Start-wrap">
        <h1 className="Start-name">Kim Taesu</h1>
        <p className="Start-desc">Frontend Developer</p>
      </div>
    );
  }
}




export default Startpage;
