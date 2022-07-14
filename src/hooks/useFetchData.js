import { useState, useCallback, useEffect } from "react";

export const useFethData = () => {
  const [message, setmessage] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchingData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://g-clone-6baa3-default-rtdb.firebaseio.com/messages.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      let laodMessages = [];
      for (const key in data) {
        laodMessages.push({
          id: key,
          title: data[key].title.slice(0, -2),
          message: data[key].message,
          description: data[key].description,
          date: "10:00PM",
        });
      }

      setmessage(laodMessages);
      setLoading(false);
      return laodMessages;
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  return [message, Loading];
};

export const useNewMessage = async (message) => {
  try {
    const resp = await fetch(
      "https://g-clone-6baa3-default-rtdb.firebaseio.com/messages.json",
      {
        method: "POST",
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
