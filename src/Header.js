import React from "react";
import { Link } from "react-router-dom";
import { styled, AppBar, Container, Grid } from "@material-ui/core";

const LinkStyled = styled(Link)({
  color: "white",
  textDecoration: "none"
});
const AppBarStyled = styled(AppBar)({
  position: "static",
  backgroundColor: `#ef5350`,
  color: `#fff`,
  marginBottom: "30px"
});

const MainMenu = styled("ul")({
  listStyle: "none",
  display: `flex`,
  justifyContent: `flex-end`
});

const Brand = styled("div")({
  fontSize: "2rem",
  color: "#fff"
});

export default function Header() {
  return (
    <AppBarStyled>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Brand>
            <h1>Pokedex</h1>
          </Brand>
          <MainMenu>
            <li>
              <LinkStyled to="/">Home</LinkStyled>
            </li>
          </MainMenu>
        </Grid>
      </Container>
    </AppBarStyled>
  );
}
