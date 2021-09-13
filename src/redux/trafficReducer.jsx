import React from "react";
import myContext from "../context/mycontext";

class trafficReducer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signal: { color: 'red' },
    }
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal = (payload) => (
    this.setState({ signal: { color: payload }})
  );

  render() {
    const context = {
      ...this.state.signal,
      changeSignal: this.changeSignal,
    }
    const { children } = this.props;
    return (
      <myContext.Provider value={context}>
        {children}
      </myContext.Provider>
    );
  }
}

export default trafficReducer;