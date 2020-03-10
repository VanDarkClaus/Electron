import React from "react";
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
    },
    checkNested: {
      paddingLeft:theme.spacing(4),
      color:'#1976d2'
    }
  })
  );

const Index: React.SFC<Props> = props => {
  // const [route, setRoute] = React.useState('/login/desktop')
  const [courseOpen, setCourseOpen] = React.useState(true);
  const [assemblyOpen, setAssemblyOpen] = React.useState(false);
  const [route, setRoute] = React.useState(()=>{
    const {href} = window.location
    let hrefArr = href.split('/')
    return '/'+hrefArr[hrefArr.length-2]+'/'+hrefArr[hrefArr.length-1]
  })
  

  const classes = useStyles();
  //跳转
  const goPage = (path: string) => {
    setRoute(path)
    props.history.push(path);
  };
  return (
    <Grid style={{ height: "100%", margin: 0 }}>
      <Grid.Column style={{ background: "#fff", padding: "0", borderRight:'1px solid rgba(0, 0, 0, 0.12)' }} width={2}>
        <List  className={classes.root} component="nav">

        <ListItem
          style={{ width: "100%" }}
          button
          onClick={() => {
            setCourseOpen(!courseOpen);
          }}
        >
          起步
        </ListItem>
        <Collapse in={courseOpen} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem onClick={()=>{goPage('/uilet/getstart')}} className={route==='/uilet/getstart'? classes.checkNested:classes.nested} button>
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
        <Collapse  in={assemblyOpen} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem onClick={()=>{goPage('/uilet/assembly')}} className={route==='/uilet/assembly'? classes.checkNested:classes.nested} button>
              test
            </ListItem>
          </List>
        </Collapse>
        </List>
      </Grid.Column>
      <Grid.Column width={14} style={{margin:'0',padding:'0'}}>
        {props.children}
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Index);
