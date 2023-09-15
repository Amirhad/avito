const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { AboutHouse } from "../components/Abouthouse";
// import { AdvertisementButtons } from "../components/AdvertisementButtons";

// import { Breadcrums } from "../components/Breadcrums";
// import { Button } from "../components/Button/Button";
// import { Description } from "../components/Description";
// import { HouseInfo } from "../components/InformationHouse/House-info";
// import { Location } from "../components/Location/Location";
// import { Slider } from "../components/Slider";
// import { TitleAndPrice } from "../components/TitleAndPrice";
// import { loadOpenCards } from "../redux/openAdvertisement/action";
// import { phoneLoading } from "../redux/phone/action";

// export const OpenAdvertisement = () => {
//   const descriptionCard = useSelector((state) => state.openCards.openCards);
//   const phone = useSelector((state) => state.phone.phone);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(loadOpenCards());
//     dispatch(phoneLoading());
//   }, []);

//   return (
//     <div className="container-3">
//       {descriptionCard.map((item) => {
//         return (
//           <>
//             <Breadcrums />
//             <TitleAndPrice item={item} />
//             <AdvertisementButtons />

//             <div className="sliders_and_buttons">
//               <div className="slider_left">
//                 <Slider item={item} />
//               </div>

//               {phone.length > 0 && (
//                 <div className="buttons_right">
//                   <Button
//                     text={phone[0].phone}
//                     padding="15px"
//                     color="white"
//                     width="300px"
//                     fontSize="23px"
//                   />
//                   <br />
//                   <br />

//                   <Button
//                     text="Написать сообщение"
//                     padding="15px"
//                     color="white"
//                     width="300px"
//                     fontSize="23px"
//                   />
//                 </div>
//               )}
//             </div>
//             <HouseInfo />
//             <Location />
//             <Description />
//             <AboutHouse />
//           </>
//         );
//       })}
//     </div>
//   );
// };
