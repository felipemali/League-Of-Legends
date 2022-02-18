import React from "react";
import { Button, Container, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "./index.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const SearchSlider = () => {
  const pages = [
    "Todos",
    "Assassinos",
    "Lutadores",
    "Magos",
    "Atiradores",
    "Suportes",
    "Tanques",
  ];
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <Paper>
      <div className="slider-search">
        <div className="input-search">
          {/* <input type="text" placeholder="Search" /> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <span style={{ borderRight: "1px solid gray" }}></span>
          </Search>
        </div>
        <div className="buttons-search">
          {pages.map((page) => (
            <Button
              className="buttons-search-style"
              key={page}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </div>

        <div className="button-choice-slider">
          <span
            style={{ borderLeft: "1px solid gray", paddingRight: "1em" }}
          ></span>
          <Button>
            Todas Dificuldades <ArrowDownwardIcon />
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default SearchSlider;
