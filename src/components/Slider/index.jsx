import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import SearchSlider from "./../SearchSlider";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "@mui/material";

export default (props) => {
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json"
      )

      .then((response) => {
        setChamps(Object.values(response.data.data));
      });
  }, []);

  // rodar o map dentro do useEffect
  // cortar o tamanho da api
  // tentar tirar o jpg ou o png dom retorno do map
  // concatenação
  const teste = (e) => {
    console.log(e);
    return e;
  };
  console.log(champs);
  return (
    <>
      <Container className="gif" maxWidth="false">
        <Container maxWidth="false" className="emphasis">
          <div className="title-champss">
            <h3>ESCOLHA SEU</h3>
            <h1>
              <mark>CAMPEÃO</mark>
            </h1>
            <h3>
              Com mais de 140 Campeões, você encontrará a combinação perfeita
              para seu estilo de jogo.
              <br />
              Especialize-se em um estilo ou em todos.
            </h3>
          </div>
        </Container>
      </Container>
      <Container maxWidth="lg" className="slider">
        <SearchSlider />
        <Swiper
          className="swiper"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log("")}
        >
          {champs.map((champ) => (
            <SwiperSlide
              onClick={() =>
                props.dataChamps(
                  champ.name,
                  champ.title,
                  champ.blurb,
                  champ.stats
                )
              }
            >
              <img
                key={champ.id}
                className="img"
                src={
                  "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                  champ.name +
                  "_1.jpg"
                }
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div style={{ marginTop: "5em" }} className="animar"></div> */}
      </Container>
    </>
  );
};
