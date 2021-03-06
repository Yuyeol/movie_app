import React from "react";

// function component는 retunr으로 screen에 표시,
// class component는 react component로부터 확장되고 screen에 표시됨
// 요거는 class component임.
class App extends React.Component {
  state = {
    count: 0,
  };

  plus = () => {
    //current로 현재 state값 가져올수있음.
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };
  // render 전, 생성
  // constructor(props) {
  //   super(props);
  //   console.log("before render, construct");
  // }
  // render 후, mount
  // componentDidMount() {
  //   console.log("after render, mount");
  // }
  // update 될때
  // componentDidUpdate() {
  //   console.log("updated");
  // }
  // unmount 될때. 여기서는 테스트가 안됨
  // componentWillUnmount() {
  //   console.log("unmount");
  // }

  // render는 React.Component의 method. 상속으로 사용할 수 있음.
  render() {
    return (
      <div>
        <h1>This is the number: {this.state.count}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

// export default App;
