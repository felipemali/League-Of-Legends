import { Container } from "@mui/material";
import react from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const InfoChamp = (props) => {
  // "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
  // props.infoChamp[0] +
  //"_1.jpg"
  const atributte = props.atributtes;
  return (
    <Container maxWidth="false" className="animate">
      <div className="container-title-champ">
        <div className="title-champ">
          {/* <img
            class="img-champ"
            src={
              "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
              props.infoChamp[0] +
              "_1.jpg"
            }
          /> */}
          <div className="name-caption-champ">
            <h1>{props.infoChamp[0]}</h1>
            <h2>{props.infoChamp[1]}</h2>
          </div>
        </div>
      </div>
      <div className="info-champ">
        <div className="sinopse">
          <h2>Sinopse</h2>
          <h4 className="blurb">{props.infoChamp[2]}</h4>
        </div>
        <div className="container-carrosel">
          <Swiper
            className="carrosel-skins"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSlideChange={() => console.log("")}
          >
            <SwiperSlide>
              <img
                className="img-carrosel"
                src={
                  "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                  props.infoChamp[0] +
                  "_0.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-carrosel"
                src={
                  "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                  props.infoChamp[0] +
                  "_1.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-carrosel"
                src={
                  "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                  props.infoChamp[0] +
                  "_2.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-carrosel"
                src={
                  "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                  props.infoChamp[0] +
                  "_3.jpg"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container-stats">
        <div className="stats">
          <div className="list-atributte-champ">
            <ul className="list">
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  hp: <span className="color-stats">{atributte.hp}</span>
                </span>
              </li>
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  hpperlevel:{" "}
                  <span className="color-stats">{atributte.hpperlevel}</span>
                </span>
              </li>
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  movespeed:
                  <span className="color-stats">{atributte.movespeed}</span>
                </span>
              </li>
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  armor: <span className="color-stats">{atributte.armor}</span>
                </span>
              </li>
            </ul>
            <ul className="list">
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  crit: <span className="color-stats">{atributte.crit}</span>
                </span>
              </li>
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  attackdamage:
                  <span className="color-stats">
                 
                    {atributte.attackdamage}
                  </span>
                </span>
              </li>
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  attackspeed:
                  <span className="color-stats"> {atributte.attackspeed} </span>
                </span>
              </li>
              <li className="atributte">
                <span>
                  <ArrowForwardIcon className="indic" />
                  attackspeed:
                  <span className="color-stats"> {atributte.attackspeed} </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InfoChamp;
