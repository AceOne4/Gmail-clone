import { Messagesction } from "./MessageSlice";
export const FethData = () => {
  return async (dispatch) => {
    try {
      dispatch(Messagesction.ShowLoading());
      const response = await fetch(
        "https://g-clone-6baa3-default-rtdb.firebaseio.com/messages.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      dispatch(Messagesction.ShowLoading());
      return dispatch(
        Messagesction.replaceMessages({
          EMessages: data.EMessages || [],
          amountOfmessages: data.amountOfmessages,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const NewMessage = (message) => {
  return async () => {
    try {
      const resp = await fetch(
        "https://g-clone-6baa3-default-rtdb.firebaseio.com/messages.json",
        {
          method: "PUT",
          body: JSON.stringify(message),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(resp);
    } catch (err) {
      console.log(err.message);
    }
  };
};
