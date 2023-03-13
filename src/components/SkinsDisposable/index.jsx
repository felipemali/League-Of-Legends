import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Autoplay } from "swiper";
import { Button, Container } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";

const SkinsDisposable = (props) => {
  const [skin, setSkin] = useState(0);
  const [skinBackground, setSkinBackground] = useState();
  const [nameSkin, setNameSkin] = useState();
  const matches = useMediaQuery("(max-width:975px)");
  const buttonPlayNow = useMediaQuery("(max-width:1019px)");

  console.log(matches);

  const teste = (num, name) => {
    console.log(num);
    setSkin({
      num: num,
      name: name,
    });
  };

  SwiperCore.use([Autoplay]);

  return (
    <>
      {matches ? (
        ""
      ) : (
        <Container maxWidth="lg" className="container-skins">
          <div className="container">
            <div className="container-carrosel">
              <h3 className="title-Skins-disponíveis">Skins Disponíveis</h3>
              <Swiper
                direction={"vertical"}
                className="carrosel-skins"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                onSlideChange={function (name) {
                  setSkinBackground(
                    props.infoChamp.skins[name.activeIndex].num
                  );
                  setNameSkin(props.infoChamp.skins[name.activeIndex].name);
                }}
                slidesPerView={3}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
              >
                {props.infoChamp?.skins?.map((skin) => (
                  <SwiperSlide
                    className="container-img-carrosel-vertical"
                    onSlideChange={skin.num}
                  >
                    <img
                      onClick={() => teste(skin.num, skin.name)}
                      className="img-carrosel-vertical"
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champ}_${skin.num}.jpg`}
                    />
                    <span className="name-skin-md">{skin.name}</span>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div
              className="bc"
              style={{
                background: `url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champ}_${skinBackground}.jpg") no-repeat center center`,
                height: "90vh",
              }}
            ></div>
          </div>
        </Container>
      )}

      {matches ? (
        <div>
          <span className="title-Skins-disponíveis-mobile">
            Skins Disponíveis
          </span>
          <div className="bc-mobile">
            <img
              className="img-skin-mobile"
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champ}_${skinBackground}.jpg`}
              alt=""
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {matches ? (
        <Swiper
          direction={matches ? "horizontal" : "vertical"}
          className="carrosel-skinss"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          onSlideChange={function (name) {
            setSkinBackground(props.infoChamp.skins[name.activeIndex].num);
            setNameSkin(props.infoChamp.skins[name.activeIndex].name);
          }}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {props.infoChamp?.skins?.map((skin) => (
            <SwiperSlide
              className="container-img-carrosel-verticall"
              onSlideChange={skin}
            >
              <img
                onClick={() => teste(skin.num, skin.name)}
                className="img-carrosel-vertical"
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champ}_${skin.num}.jpg`}
              />
              <span className="name-skins">{skin.name}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}

      {buttonPlayNow ? (
        <div style={{ marginTop: "15vh" }}>
          <Button
            style={{ marginBottom: "3em", color: "gold" }}
            className="button-playNow"
          >
            PLAY NOW
          </Button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default SkinsDisposable;
