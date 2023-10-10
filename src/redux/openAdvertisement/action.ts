//cards

import { Dispatch } from "react";
import { EnumActionTypes, ReduxAction } from "../../types";

export const loadDesc = () =>{
    return (dispatch:Dispatch<ReduxAction>):void =>{
        dispatch({type:EnumActionTypes.FETCH_DESC})

        fetch("http://localhost:8080/descriptionAdvertisement")
        .then((res) => res.json())
        .then((data) =>{
            dispatch({
                type:EnumActionTypes.FETCH_DESC_FULFILLED,
                payload:data
            })
        })
    }
}


//image
export const loadLargeImage = () =>{
    return (dispatch:Dispatch<ReduxAction>):void =>{
        dispatch({type:EnumActionTypes.FETCH_IMG})

        fetch("http://localhost:8080/sliderImage")
        .then((res) => res.json())
        .then((data) =>{
            dispatch({
                type:EnumActionTypes.FETCH_IMG_FULFILLED,
                payload:data
            })
        })
    }
}


//adress
export const loadAdress = () =>{
    return(dispatch:Dispatch<ReduxAction>):void =>{
        dispatch({type: EnumActionTypes.FETCH_ADRESS})
        
        fetch( "http://localhost:8080/addresses")
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type:EnumActionTypes.FETCH_ADRESS_FULFILLED,
                payload:data
            })
        })
    }
}



//phone
export const loadPhone = () =>{
    return (dispatch:Dispatch<ReduxAction>):void =>{
        dispatch({type:EnumActionTypes.FETCH_PHONE})

        fetch("http://localhost:8080/phone")
        .then((res) => res.json())
        .then((data) =>{
            dispatch({
                type:EnumActionTypes.FETCH_PHONE_FULFILLED,
                payload:data
            })
        })
    }
}

//title
export const loadTitle = () =>{
    return (dispatch:Dispatch<ReduxAction>):void =>{
        dispatch({type:EnumActionTypes.FETCH_TITILE})

        fetch("http://localhost:8080/title")
        .then((res) => res.json())
        .then((data) =>{
            dispatch({
                type:EnumActionTypes.FETCH_TITILE_FULFILLED,
                payload:data
            })
        })
    }
}
