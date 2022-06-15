import React,{useReducer} from "react";
import { initilaState, reducer } from "./Reducer/reduserStore";


export const ReducerData = React.createContext();


export const  ReducerDataProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initilaState)
    const {data} = state;
    return(
        <ReducerData.Provider value={{ data }}>
            {children}
        </ReducerData.Provider>
    )
}


