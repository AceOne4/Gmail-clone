// import { useState } from "react";

// export const useFethData = () => {
//   const [Loading, setLoading] = useState(true);
//   return async () => {
//     try {
//       const response = await fetch(
//         "https://g-clone-6baa3-default-rtdb.firebaseio.com/messages.json"
//       );
//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }

//       const data = await response.json();

//       setLoading(false);
//       return data;
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

// export const useNewMessage = async (message) => {
//   try {
//     const resp = await fetch(
//       "https://g-clone-6baa3-default-rtdb.firebaseio.com/messages.json",
//       {
//         method: "PUT",
//         body: JSON.stringify(message),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(resp);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
