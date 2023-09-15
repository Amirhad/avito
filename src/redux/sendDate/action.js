export const SendDate = (nameOfAddAdvertisement, image, desc, price,location) =>{
    return(dispatch) =>{
        dispatch({type:'send/data/start'})

        fetch("http://localhost:8080/advertisement",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                title:nameOfAddAdvertisement,
                price:price,
                image:image,
                location:location,
                date: "Сегодня в 19:36",
            })
        })
        
        .then((res) => res.json())
        .then((data) =>{
            dispatch({
                type:"send/data/success",
                payload:data
            })
        })
    }
}