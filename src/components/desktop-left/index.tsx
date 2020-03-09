import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Button, Container, Divider, Grid, Header, Image,List } from 'semantic-ui-react'


interface Props{
    [a:string]:any
}

const  Index:React.SFC<Props> = (props) =>  {
    // const [route, setRoute] = React.useState('/login/desktop')
    const goPage = (path:string) =>{
        // setRoute(path)
        props.history.push(path)
    }
        return (
            <Grid style={{height:'100%',margin:0}}>
                <Grid.Column style={{background:'#000'}} width={2}>
                    <List ordered>
                        <List.Item as='a'>Getting Started</List.Item>
                        <List.Item as='a'>Introduction</List.Item>
                        <List.Item>
                        <a>Languages</a>
                        <List.List>
                            <List.Item as='a'>HTML</List.Item>
                            <List.Item as='a'>Javascript</List.Item>
                            <List.Item as='a'>CSS</List.Item>
                        </List.List>
                        </List.Item>
                        <List.Item as='a'>Review</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={14}>{props.children}</Grid.Column>
            </Grid>
        )
}

export default withRouter(Index)
