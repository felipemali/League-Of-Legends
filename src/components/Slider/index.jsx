import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import SearchSlider from "./../SearchSlider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container, Link } from "@mui/material";

export default (props) => {
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
      <Container maxWidth="lg" className="slider" id="teste">
        <SearchSlider setSearch={props.setSearch} />
        <Swiper
          className="swiper"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log("")}
        >
          {props.champs.map((champ) => (
            <SwiperSlide onClick={() => props.setSelectedChamp(champ)}>
              <Link href="#info-champ">
                <img
                  key={champ.id}
                  className="img"
                  src={
                    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                    champ.id +
                    "_0.jpg"
                  }
                  alt=""
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div style={{ marginTop: "5em" }} className="animar"></div> */}
      </Container>
    </>
  );
};
