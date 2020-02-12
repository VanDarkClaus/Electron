interface Aciotn{
    type: string,
    [a:string]:any
}


 const loginReducers = (state ={name:'dd'}, action:Aciotn) =>{
    switch(action.type) {
        default: return state 
    }
}

export {loginReducers}