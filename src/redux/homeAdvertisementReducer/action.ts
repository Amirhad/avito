import { Dispatch } from "redux";
import { EnumActionTypes, ReduxAction } from "../../types";

export const loadCards = () =>{
    return(dispatch:Dispatch<ReduxAction>):void =>{
        dispatch({type: EnumActionTypes.FETCH_CARDS})
        
        fetch( "http://localhost:8080/advertisement")
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type:EnumActionTypes.FETCH_CARDS_FULFILLED,
                payload:data
            })
        })
    }
}