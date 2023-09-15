//cards
export const loadDesc = () =>{
    return (dispatch) =>{
        dispatch({type:"load/desc/start"})

        fetch("http://localhost:8080/descriptionAdvertisement")
        .then((res) => res.json())
        .then((data) =>{
            dispatch({
                type:"load/desc/success",
                payload:data
            })
        })
    }
}


//image
export const loadLargeImage = () =>{
    return (dispatch) =>{
        dispatch({type:"load/image/start"})

        fetch("http://localhost:8080/sliderImage")
        .then((res) => res.json())
        .then((data) =>{
            dispatch({
                type:"load/image/success",
                payload:data
            })
        })
    }
}


//adress
export const loadAdress = () =>{
    return(dispatch) =>{
        dispatch({type: "load/adress/start"})
        
        fetch( "http://localhost:8080/addresses")
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type:"load/adress/success",
                payload:data
            })
        })
    }
}



//phone
export const loadPhone = () =>{
    return (dispatch) =>{
        dispatch({type:"load/phone/start"})

        fetch("http://localhost:8080/phone")
        .then((res) => res.json())
        .then((data) =>{
            dispatch({
                type:"load/phone/success",
                payload:data
            })
        })
    }
}

//title
export const loadTitle = () =>{
    return (dispatch) =>{
        dispatch({type:"load/title/start"})

        fetch("http://localhost:8080/title")
        .then((res) => res.json())
        .then((data) =>{
            dispatch({
                type:"load/title/success",
                payload:data
            })
        })
    }
}
