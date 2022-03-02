import { Container } from "@mui/material";
import react, { useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import "./index.css";

import axios from "axios";
import AtributteList from "../AtributteList";
import SkinsDisposable from "../SkinsDisposable";
import useMediaQuery from "@mui/material/useMediaQuery";

const InfoChamp = (props) => {
  const [infoChamp, setInfoChamp] = useState("");
  const [textSkills, setTextSkills] = useState(false);
  const [text, setText] = useState("");
  const matches = useMediaQuery("(max-width:975px)");

  useEffect(() => {
    if (props.champ) {
      axios
        .get(
          `http://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion/${props.champ.id}.json`
        )

        .then((response) => {
          setInfoChamp(response.data.data[props.champ.id]);
        });
    }
  }, [props.champ]);

  if (!props.champ) {
    return <span>selecione um Champ</span>;
  }

  const ocultText = (description, name) => {
    setText({
      description: description,
      name: name,
    });
    textSkills == false ? setTextSkills(true) : setTextSkills(false);
  };
  // console.log(infoChamp.skins);
  // console.log(infoChamp.spells);
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Container maxWidth="xl" className="animate">
        <div className="container-title-champ">
          <div className="title-champ">
            <Container maxWidth="string">
              <div
                className="bc-champ-selected"
                id="info-champ"
                // style={{
                //   background: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champ.id}_0.jpg") no-repeat center center`,
                // }}
              >
                {matches ? (
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champ.id}_0.jpg`}
                    alt=""
                  />
                ) : (
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champ.id}_0.jpg`}
                    alt=""
                  />
                )}
              </div>
              <div className="name-caption-champ">
                <span
                  className="font-title"
                  style={{ fontSize: "60px", color: "gold" }}
                >
                  {props.champ.name}
                </span>
                <span className="font-sub-title">{props.champ.title}</span>
              </div>
            </Container>
            <div className="title-skills">
              <h1>Habilidades</h1>
            </div>
          </div>
        </div>

        <Container maxWidth="lg">
          <div className="container-info">
            {infoChamp?.spells?.map((e) => (
              <div className="container-skills">
                <img
                  className="img-skills"
                  onClick={() => ocultText(e.description, e.name)}
                  src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${e.id}.png`}
                  alt=""
                />
              </div>
            ))}

            <div className="container-img-champ-info">
              <img
                className="img-champ-info"
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champ.id}_1.jpg`}
                alt=""
              />
            </div>
          </div>

          <div className="container-description">
            <div className="description">
              <h2 className="title-skill">{text.name}</h2>
              <h4>{text.description}</h4>
            </div>
          </div>

          <AtributteList
            id={props.champ.id}
            champ={props.champ}
            hp={props.champ.stats.hp}
            hpperlevel={props.champ.stats.hpperlevel}
            movespeed={props.champ.stats.movespeed}
            armor={props.champ.stats.armor}
            crit={props.champ.stats.crit}
            attackdamage={props.champ.stats.attackdamage}
            attackspeed={props.champ.stats.attackspeed}
            infoChamp={infoChamp}
          />
          {/* <div className="container-sinopse">
              <div className="sinopse">
                <h2>Sinopse</h2>
                <h4 className="blurb">{props.champ.resume}</h4>
              </div>
            </div>
          */}
        </Container>
        <SkinsDisposable
          champ={props.champ.id}
          infoChamp={infoChamp}
          numbers={infoChamp.skins}
        />
      </Container>
    </>
  );
};

export default InfoChamp;
