export const chats = () => {
  return (dispatch) => {
    dispatch({ type: "load/chats/start" });

    fetch("http://localhost:8080/chats")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "load/chats/success",
          payload: data,
        });
      });
  };
};
