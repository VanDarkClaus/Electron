import React, { Component } from 'react'


export default class index extends Component {
    max = () =>{
        let win:any = window
       if(win.electron){
           win.electron.ipcRenderer.send('max')
       }
    }
    min = () =>{
        let win:any = window
       if(win.electron){
           win.electron.ipcRenderer.send('min')
       }
    }
    unmax = () =>{
        let win:any = window
       if(win.electron){
           win.electron.ipcRenderer.send('unmax')
       }
    }
    render() {
        return (
            <div>
                <button onClick={this.max}>max</button>
                <button onClick={this.unmax}>unmax</button>
                <button onClick={this.min}>min</button>
            </div>
        )
    }
}