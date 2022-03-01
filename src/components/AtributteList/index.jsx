import react, { useEffect, useState } from "react";
import "./index.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";

const AtributteList = (props) => {
  return (
    <>
      <span className="title-stats">Estatísticas</span>
      <div className="container-stats">
        <div className="stats">
          <div className="list-atributte-champ">
            <ul className="list">
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  hp:
                  <span className="color-stats"> {props.hp} </span>
                </span>
              </li>

              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  hpperlevel:
                  <span className="color-stats"> {props.hpperlevel} </span>
                </span>
              </li>
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  movespeed:
                  <span className="color-stats"> {props.movespeed} </span>
                </span>
              </li>
              <li>
                <span>
                  <ArrowForwardIcon className="indic" />
                  armor: <span className="color-stats"> {props.armor} </span>
                </span>
              </li>
            </ul>
            <ul className="list">
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  crit:
                  <span className="color-stats">{props.crit}</span>
                </span>
              </li>
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  attackdamage:
                  <span className="color-stats"> {props.attackdamage} </span>
                </span>
              </li>
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  attackspeed:
                  <span className="color-stats"> {props.attackspeed} </span>
                </span>
              </li>
              <li>
                <span>
                  <ArrowForwardIcon className="indic" />
                  attackspeed:
                  <span className="color-stats"> {props.attackspeed} </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default AtributteList;
