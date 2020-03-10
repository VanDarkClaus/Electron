import React from "react";
import { Button, Grid, Label, Icon } from "semantic-ui-react";
import GridLayout from "react-grid-layout";

interface Props {
  [a: string]: any;
}

const Index: React.SFC<Props> = props => {
  const loginOut = async () => {
    await localStorage.clear();
    props.history.push("/");
  };
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2, static: false },
    { i: "b", x: 2, y: 0, w: 3, h: 2, minW: 2, maxW: 16 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <>
      <div style={{background:'#1976d2',height:'64px'}}>
        <div>设置</div>
      </div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <Label
          key="a"
          style={{
            // width: "100%",
            // height: "100%",
            // position: "relative",
            background: "#fff",
            boxShadow: "0 1px 2px #ccc"
          }}
        >
          <Grid>
            <Grid.Column width={11}>组件</Grid.Column>
            <Grid.Column width={5}>代码</Grid.Column>
          </Grid>
        </Label>
        <Label
          key="b"
          style={{
            // width: "100%",
            // height: "100%",
            // position: "relative",
            background: "#fff",
            boxShadow: "0 1px 2px #ccc"
          }}
        >
          <Grid>
            <Grid.Column width={11}>组件</Grid.Column>
            <Grid.Column width={5}>代码</Grid.Column>
          </Grid>
        </Label>
      </GridLayout>
    
    </>
  );
};

export default Index;
