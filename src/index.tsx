import React from "react";
import ReactDOM from "react-dom";
import "@material/mwc-button";
import reactToWebComponent from "react-to-webcomponent";

interface State {
  count: number;
}
interface Props {}

export default class ElementsMartial extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const styles = `.elements-martial * {
          font-size: 200%;
        }

        .elements-martial span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        .elements-martial mwc-button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }`;

    return (
      <div className="elements-martial">
        <style>{styles}</style>
        <mwc-button
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          -
        </mwc-button>
        <span>{this.state.count}</span>
        <mwc-button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </mwc-button>
      </div>
    );
  }
}

customElements.define(
  "elements-martial",
  reactToWebComponent(ElementsMartial, React, ReactDOM)
);
