import React, { useState } from "react";
import Loader from "./Loader";
import { styled, Container, Grid, Chip } from "@material-ui/core";

const Sprite = styled("img")({
  width: `100%`,
  height: `auto`
});

export default function Poke(props) {
  const [poke, setPoke] = useState(props.match.params.name);
  const [sprite, setSprite] = useState([]);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [order, setOrder] = useState("");
  const [loading, setLoading] = useState(false);
  if (!loading) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      .then(response => response.json())
      .then(res => {
        setSprite(res.sprites);
        setStats(res.stats.map(item => item));
        setTypes(res.types.map(item => item));
        setHeight(res.height);
        setWeight(res.weight);
        setOrder(res.order);
        setLoading(true);
      });
  }
  return (
    <Container>
      {loading ? (
        <Grid container>
          <Grid item xs={12}>
            <h2>
              #{order} {poke}
            </h2>
          </Grid>
          <Grid item xs={12} md={2}>
            <Sprite src={sprite.front_default} alt={poke} />
          </Grid>
          <Grid item xs={12} md={2} alignItems="center">
            {types.map(item => (
              <Chip
                label={item.type.name}
                className={item.type.name}
                key={item.type.name}
              />
            ))}

            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
          </Grid>
          <Grid item xs={12} md={8} className="stats">
            <ul className="statList">
              {stats.map(item => (
                <li key={item.stat.name}>
                  {item.stat.name}: {item.base_stat}
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      ) : (
        <Loader />
      )}
    </Container>
  );
}
