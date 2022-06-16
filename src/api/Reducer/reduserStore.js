import { actionTypes } from "./action-type/actionTypes";

export const initilaState = {
    data:[
        {
            id:new Date().getTime(),
            name:'Multicolored armless top',
            price:10000,
            size:'xl',
            color:'red',
            type:'men',
            img:"./img/1.png"
        },
        {
            id:new Date().getTime(),
            name:'Multicolored armless top',
            price:10000,
            size:'xl',
            color:'red',
            type:'men',
            img:"./img/1.png"
        },
        {
            id:new Date().getTime(),
            name:'Multicolored armless top',
            price:10000,
            size:'xl',
            color:'red',
            type:'men',
            img:"./img/1.png"
        }, {
            id:new Date().getTime(),
            name:'Multicolored armless top',
            price:10000,
            size:'xl',
            color:'red',
            type:'men',
            img:"./img/1.png"
        }
        , {
            id:new Date().getTime(),
            name:'Multicolored armless top',
            price:10000,
            size:'xl',
            color:'red',
            type:'men',
            img:"./img/1.png"
        }
    ]
}

export const reducer = (state=initilaState,action) =>{
    const {type,payload} = action;
    switch (type) {
        case actionTypes.add:
            return{
                ...state,
                data:[...state.data,payload]
            }
          
    
        default:
           return state
    }
}