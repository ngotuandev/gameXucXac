import React, { Component } from "react";

export default class KetQua extends Component {
  render() {
    let { luaChon, soBanThang, soLuotChoi } = this.props;
    return (
      <div>
        {luaChon === null ? (
          <h3>Bạn chưa chọn</h3>
        ) : (
          <h3>
            Bạn chọn: <span className="text-success">{luaChon}</span>
          </h3>
        )}
        <h3>
          Số bàn thắng: <span className="text-danger">{soBanThang}</span>
        </h3>
        <h3>
          Số lượt chơi: <span className="text-danger">{soLuotChoi}</span>
        </h3>
        <button
          className="btn btn-success"
          style={{ marginTop: "50px", fontSize: "35px" }}
          onClick={() => {
            this.props.handlePlay();
          }}
        >
          Play game
        </button>
      </div>
    );
  }
}
