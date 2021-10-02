import React, { Component } from "react";
export class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "React",
    };
  }
  render() {
    return (
      <div>
        <h1> test Home </h1>
      </div>
    );
  }
}
