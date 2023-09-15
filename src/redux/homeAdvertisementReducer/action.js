export const loadCards = () =>{
    return(dispatch) =>{
        dispatch({type: "load/cards/start"})
        
        fetch( "http://localhost:8080/advertisement")
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type:"load/cards/success",
                payload:data
            })
        })
    }
}