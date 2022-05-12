import React, { Component } from "react";
import { TAI, XIU } from "./gameXucXacContant";
let btnStyle = {
  padding: "75px",
  fontSize: "40px",
};

export default class XucXac extends Component {
  render() {
    return (
      <div className="container" style={{ marginBottom: "160px" }}>
        <h1 style={{ fontSize: "75px", marginBottom: "200px" }}>
          Game xúc xắc
        </h1>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-danger"
            style={btnStyle}
            onClick={() => {
              this.props.handleLuaChon(TAI);
            }}
          >
            TÀI
          </button>
          <div>
            {this.props.mangXucXac.map((item, index) => {
              return (
                <img
                  src={item.img}
                  alt=""
                  key={index}
                  style={{ width: "60px", height: "60px" }}
                />
              );
            })}
          </div>
          <button
            className="btn btn-dark"
            style={btnStyle}
            onClick={() => {
              this.props.handleLuaChon(XIU);
            }}
          >
            XỈU
          </button>
        </div>
      </div>
    );
  }
}
