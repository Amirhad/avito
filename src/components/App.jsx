import { Message } from "../pages/Message.tsx";
import { Routes, Route } from "react-router-dom";

import { OpenAdvertisement } from "../pages/Open-advertisement";
import { LincodeComponent } from "./content/LincodeComponent";
import { Layout } from "./Layout/Layout";
import { AddAdvertisement } from "../pages/Add-Advertisement";
import { MyAddAdvertisement } from "../pages/MyAddAdvertisement";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCards } from "../redux/homeAdvertisementReducer/action";
import {loadAdress,loadDesc,loadLargeImage,loadPhone,loadTitle,} from "../redux/openAdvertisement/action";
import { chats } from "../redux/chatsReducer/action";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards());
    dispatch(loadDesc());
    dispatch(loadLargeImage());
    dispatch(loadAdress());
    dispatch(loadPhone());
    dispatch(loadTitle());
    dispatch(chats());

  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LincodeComponent />} />
        <Route path="/advertisement/:id?" element={<OpenAdvertisement />} />
        <Route path="/message" element={<Message />} />
        <Route path="/add/advertisement" element={<AddAdvertisement />} />
        <Route path="/My/advertisement" element={<MyAddAdvertisement />} />
      </Route>
    </Routes>
  );
};



//от abouthouse  до breadcrums типизировал