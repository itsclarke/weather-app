import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Forecast from "./components/Forecast";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

const Container = styled.div`
  width: 96%;
  margin: 10px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  border-radius: 10px;
  border: solid 1px lightgrey;
  overflow: hidden;
`;

const Body = styled.div`
  padding: 15px;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <Body>
          <Switch>
            <Route exact path="/" component={Forecast} />
            <Route path="/:zip/:day" component={Details} />
            <Route component={NotFound} />
          </Switch>
        </Body>
      </BrowserRouter>
    </Container>
  );
}

export default App;
