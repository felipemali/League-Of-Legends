import react, { useState } from "react";
import Slider from "../../components/Slider";
import Menu from "../../components/Menu";
import InfoChamp from "../../components/InfoChamp";

const Home = () => {
  const [infoChamp, setInfoChamp] = useState([]);
  const [atributtes, setAtributtes] = useState([]);

  const dataChamps = (name, title, blurb, atributtes) => {
    try {
      setInfoChamp([name, title, blurb]);
      setAtributtes(atributtes);
    } catch {
      <h1>Erro</h1>;
    }
    // console.log(name);
    // console.log(array);
  };
  // const champs = [
  //   "https://www.pcgamesn.com/wp-content/uploads/2021/07/league-of-legends-ruined-miss-fortune.jpg",
  //   "https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/11/league-of-legends-4.jpg",

  //   "https://cdn1.dotesports.com/wp-content/uploads/sites/3/2021/01/08131859/Viego.jpg",
  //   "https://s2.glbimg.com/XOEHXkXa5x1xPQVOcmItUrJg92o=/0x0:1000x587/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/m/B/ykw3OyTWK0zxrvUXbrzg/0.jpg",
  // ];
  return (
    <div>
      <Menu />
      <Slider dataChamps={dataChamps} />
      <InfoChamp atributtes={atributtes} infoChamp={infoChamp} />
    </div>
  );
};

export default Home;
