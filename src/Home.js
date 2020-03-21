import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled, Container, Grid, Paper, TextField } from "@material-ui/core";

import Loader from "./Loader";

const PaperStyled = styled(Paper)({
  padding: "10px",
  textAlign: "center",
  textTransform: "capitalize"
});
const LinkStyled = styled(Link)({
  textDecoration: "none"
});

export default function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!loading) {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
        .then(response => response.json())
        .then(res => {
          setList(res.results.map(item => item.name));
          setFiltered(res.results.map(item => item.name));
          setLoading(true);
        });
    }
  }, []);
  return (
    <Container>
      {loading ? (
        <>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <h2>Pokes</h2>
            </Grid>
            <Grid item>
              <TextField
                id="filter"
                label="Filter"
                variant="standard"
                onChange={e => {
                  setFiltered(
                    list.filter(item =>
                      item.toLowerCase().includes(e.target.value)
                    )
                  );
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {filtered.map(item => (
              <Grid key={item} item xs={12} sm={4} md={3}>
                <LinkStyled to={item}>
                  <PaperStyled elevation={3}>{item}</PaperStyled>
                </LinkStyled>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
}
