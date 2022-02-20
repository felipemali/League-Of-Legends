import { Container } from "@mui/material";
import react, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";

import axios from "axios";
import AtributteList from "../AtributteList";

const InfoChamp = (props) => {
  const [infoChamp, setInfoChamp] = useState();
  const letters = ["Q", "W", "E"];

  useEffect(() => {
    if (props.champ) {
      axios
        .get(
          `http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion/${props.champ.id}.json`
        )

        .then((response) => {
          setInfoChamp(response.data.data[props.champ.id]);
        });
    }
  }, [props.champ]);

  if (!props.champ) {
    return <span>selecione um Champ</span>;
  }
  console.log(props.champ.name);

  return (
    <Container maxWidth="false" className="animate">
      <div className="container-title-champ">
        <div className="title-champ">
          <div
            className="bc-champ-selected"
            id="info-champ"
            style={{
              background: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champ.id}_0.jpg") no-repeat center center`,
            }}
          >
            <div className="name-caption-champ">
              <span className="font-title">{props.champ.name}</span>
              <span className="font-sub-title">{props.champ.title}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="info-champ">
        <div className="sinopse">
          <h2>Sinopse</h2>
          <h4 className="blurb">{props.champ.resume}</h4>
        </div>

        <div className="container-carrosel">
          <Swiper
            className="carrosel-skins"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
          >
            {infoChamp?.skins?.map((skin) => (
              <SwiperSlide>
                <img
                  className="img-carrosel"
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champ.id}_${skin.num}.jpg`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <AtributteList
        hp={props.champ.stats.hp}
        hpperlevel={props.champ.stats.hpperlevel}
        movespeed={props.champ.stats.movespeed}
        armor={props.champ.stats.armor}
        crit={props.champ.stats.crit}
        attackdamage={props.champ.stats.attackdamage}
        attackspeed={props.champ.stats.attackspeed}
      />

      {letters.map((e) => (
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${props.champ.name}${e}.png`}
          alt=""
        />
      ))}
    </Container>
  );
};

export default InfoChamp;
