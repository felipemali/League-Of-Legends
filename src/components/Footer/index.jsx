import { Button, Link } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import RiotGames from "../../imgs/riotgames.png";
import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="buttons">
        <Button className="icone">
          <Link href="https://www.youtube.com/user/RiotGamesBrasil">
            <YouTubeIcon className="img-icone" />
          </Link>
        </Button>
        <Button className="icone">
          <Link href="https://twitter.com/LoLegendsBR">
            <TwitterIcon className="img-icone" />
          </Link>
        </Button>
        <Button className="icone">
          <Link href="https://web.facebook.com/LeagueofLegendsBrasil?_rdc=1&_rdr">
            <FacebookIcon className="img-icone" />
          </Link>
        </Button>
        <Button className="icone">
          <Link href="https://www.instagram.com/leagueoflegends/">
            <InstagramIcon className="img-icone" />
          </Link>
        </Button>
        {/* <Button className="icone reddit-mobile">
          <Link href="https://www.reddit.com/r/leagueoflegends/">
            <RedditIcon className="img-icone" />
          </Link>
        </Button> */}
      </div>
      <div className="container-icone-riot-games">
        <Link href="https://www.riotgames.com/pt-br?_gl=1*84ec4y*_ga*MTkyNzIzNTk1OS4xNjQxOTUwNzAw*_ga_FXBJE5DEDD*MTY0MTk1MDY5Ni4xLjAuMTY0MTk1MDY5Ni42MA..">
          <img className="icone-riot-games" src={RiotGames} alt="" />
        </Link>
      </div>
      <span className="direitos-reservados">
        ™ & © 2022 Riot Games, Inc. Todos os direitos reservados. Riot Games,
        League of Legends e PvP.net são marcas registradas e marcas de serviço
        da Riot Games, Inc.
      </span>

      <div className="minimum-age">
        <a href="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltd8318f573a54dfdf/5f2dba47327a6201d7eba345/riot-seloclassind-12-lol.png">
          <img
            src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltfec52e9b4c5e7641/6217a05bd99501714bc22ece/12.png?&height=100&disable=upscale"
            alt=""
          />
        </a>
        <div className="container-about-the-contents">
          <span className="about-the-contents">Violência</span>
          <span className="about-the-contents">Conteúdo Sexual</span>
          <span className="about-the-contents">Linguagem Imprópria</span>
          <span className="about-the-contents">Compras On-line</span>
          <span className="about-the-contents">Interação de Usuários</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
