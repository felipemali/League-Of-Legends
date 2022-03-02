import react, { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import Menu from "../../components/Menu";
import InfoChamp from "../../components/InfoChamp";
import axios from "axios";
import Footer from "../../components/Footer";

const Home = () => {
  const [selectedChamp, setSelectedChamp] = useState();
  const [champs, setChamps] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json"
      )

      .then((response) => {
        const data = Object.values(response.data.data).map((champ) => {
          return {
            id: champ.id,
            name: champ.name,
            title: champ.title,
            resume: champ.blurb,
            stats: champ.stats,
          };
        });
        setChamps(data);
      });
  }, []);
  const filter = champs.filter((champ) => {
    return champ.name.toLowerCase().includes(search);
  });
  console.log(filter);

  // const dataChamps = (name, title, blurb, atributtes) => {
  //     setInfoChamp([name, title, blurb]);
  //     setAtributtes(atributtes);
  //     <h1>Erro</h1>;

  //   }

  return (
    <div>
      <Menu />
      <Slider
        champs={filter}
        setSelectedChamp={setSelectedChamp}
        setSearch={setSearch}
      />
      <InfoChamp champ={selectedChamp} />
      <Footer />
    </div>
  );
};

export default Home;
