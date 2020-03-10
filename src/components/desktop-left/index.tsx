import React, { Component } from "react";
import { withRouter } from "react-router";
import { Grid } from "semantic-ui-react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface Props {
  [a: string]: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft:theme.spacing(4),
    }
  })
);

const Index: React.SFC<Props> = props => {
  const classes = useStyles();
  // const [route, setRoute] = React.useState('/login/desktop')
  const [courseOpen, setCourseOpen] = React.useState(true);
  const [assemblyOpen, setAssemblyOpen] = React.useState(false);

  const goPage = (path: string) => {
    // setRoute(path)
    props.history.push(path);
  };
  return (
    <Grid style={{ height: "100%", margin: 0 }}>
      <Grid.Column style={{ background: "#fff", padding: "0" }} width={2}>
        <List  className={classes.root} component="nav">

        <ListItem
          style={{ width: "100%" }}
          button
          onClick={() => {
            setCourseOpen(!courseOpen);
          }}
        >
          入门教程
        </ListItem>
        <Collapse in={courseOpen} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem className={classes.nested} button>
              get start
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          button
          onClick={() => {
            setAssemblyOpen(!assemblyOpen);
          }}
        >
          组件
        </ListItem>
        <Collapse in={assemblyOpen} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem className={classes.nested} button>
              test
            </ListItem>
          </List>
        </Collapse>
        </List>
      </Grid.Column>
      <Grid.Column width={14}>{props.children}</Grid.Column>
    </Grid>
  );
};

export default withRouter(Index);
