import React, { Component } from "react";
import { concatMap, from, of, toArray } from "rxjs";

import { Faker } from "./Faker";
export class User extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "React user ",
    };
  }
  aj() {
    let f = new Faker();
    let qrData = f.getData();
    console.log("qr=>", qrData);
    return from(f.userSave(qrData, "POST"));
  }
  userPassword(data: any) {
    let arr = Array.from(Array(1000).keys());
    let f = new Faker();
    of(...arr)
      .pipe(
        concatMap(d => {
          let dt: any = f.userPass();
          dt.id = d + 1;
          return of(dt);
        }),
        toArray()
      )
      .subscribe(_ => {
        console.log(_);
      });
  }
  test() {
    let f = new Faker();
    console.log(f.test());
    let arr = Array.from(Array(10000).keys());
    of(...arr)
      .pipe(
        concatMap(d => {
          let dt: any = f.test();
          dt.id = d + 1;
          dt.userId = Math.floor(Math.random() * 1001);
          return of(dt);
        }),
        toArray()
      )
      .subscribe(_ => {
        console.log(_);
      });
  }
  userClick(data: any) {
    console.log("user Click = >", new Date().getTime(), data);

    let arr = Array.from(Array(1000).keys());

    let f = new Faker();
    of(...arr)
      .pipe(
        concatMap(d => {
          let dt: any = f.getData();
          dt.id = d + 1;
          return of(dt);
        }),
        toArray()
      )
      .subscribe(_ => {
        console.log(_);
      });
  }
  render() {
    return (
      <div>
        <h1> test user {this.state.name} </h1>
        <button
          type="button"
          className="btn btn-sm btn-primary me-2"
          onClick={e => this.userClick(5656)}
        >
          user
        </button>
        <button
          type="button"
          className="btn btn-sm btn-primary me-2"
          onClick={e => this.userPassword(5656)}
        >
          user - Pass
        </button>
        <button
          type="button"
          className="btn btn-sm btn-primary me-2"
          onClick={e => this.test()}
        >
          test
        </button>
      </div>
    );
  }
}
