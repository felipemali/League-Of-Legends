import React, { useState } from "react";
import { Button, Container, Paper } from "@mui/material";
import { PinDropSharp, Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "./index.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const SearchSlider = (props) => {
  const [search, setSearch] = useState();

  const updateSearch = (value) => {
    setSearch(value);
    props.setSearch(value);
  };

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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Champs…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => updateSearch(e.target.value)}
              value={search}
              autoFocus={true}
            />
            {/* <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          /> */}
            <span className="border-search"></span>
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
      </div>
    </Paper>
  );
};

export default SearchSlider;
