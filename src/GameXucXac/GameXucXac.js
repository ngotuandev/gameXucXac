import React, { Component } from "react";
import "./game.css";
import KetQua from "./KetQua";
import XucXac from "./XucXac";
import { randomIntFromInterval } from "./gameXucXacUtil";
import { TAI, XIU } from "./gameXucXacContant";

export default class GameXucXac extends Component {
  state = {
    mangXucXac: [
      {
        giaTri: 5,
        img: "./imgXucSac/5.png",
      },
      {
        giaTri: 5,
        img: "./imgXucSac/5.png",
      },
      {
        giaTri: 5,
        img: "./imgXucSac/5.png",
      },
    ],
    luaChon: null,
    soBanThang: 0,
    soLuotChoi: 0,
  };

  handleLuaChon = (value) => {
    this.setState({
      luaChon: value,
    });
  };

  handlePlay = () => {
    let tongDiemXucXac = 0;
    let newMangXucXac = this.state.mangXucXac.map((item, index) => {
      let random = randomIntFromInterval(1, 6);
      tongDiemXucXac += random;
      return {
        giaTri: random,
        img: `./imgXucSac/${random}.png`,
      };
    });
    // da
    let ketQua = tongDiemXucXac >= 11 ? TAI : XIU;
    let newSoBanThang =
      this.state.luaChon === ketQua
        ? this.state.soBanThang + 1
        : this.state.soBanThang;
    let newSoLuotChoi = this.state.soLuotChoi + 1;
    this.setState({
      mangXucXac: newMangXucXac,
      soBanThang: newSoBanThang,
      soLuotChoi: newSoLuotChoi,
    });
  };

  handleTongXX = () => {
    let tong = 0;
    for (let i = 0; i < this.state.mangXucXac.length; i++) {
      tong += this.state.mangXucXac[i].giaTri;
    }
    return tong;
  };

  render() {
    return (
      <div className="bg_game">
        <XucXac
          mangXucXac={this.state.mangXucXac}
          handleLuaChon={this.handleLuaChon}
        />
        <KetQua
          handleTongXX={this.handleTongXX}
          mangXucXac={this.state.mangXucXac}
          luaChon={this.state.luaChon}
          soBanThang={this.state.soBanThang}
          soLuotChoi={this.state.soLuotChoi}
          handlePlay={this.handlePlay}
        />
      </div>
    );
  }
}
