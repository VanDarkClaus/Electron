import React, { Component } from "react";
// import { Route, Redirect,Switch, RouteComponentProps, withRouter } from 'react-router'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Label,
  Icon
} from "semantic-ui-react";
import DesktopLeft from "../../components/desktop-left";

interface Props {
  [a: string]: any;
}

const Index: React.SFC<Props> = props => {
  const loginOut = async () => {
    await localStorage.clear();
    props.history.push("/");
  };
  return (
    <DesktopLeft>
      <Grid style={{ width: "100%", height: "100%" }}>
        <Grid.Column width={10}>
          <Label
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              background: "#fff",
              boxShadow: "0 1px 2px #ccc"
            }}
          >
            <Icon name="mail" /> 23
          </Label>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={loginOut}>tuichu</Button>
        </Grid.Column>
      </Grid>
    </DesktopLeft>
  );
};

export default Index;
