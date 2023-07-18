




// import { CartProps } from "../types/types";
// import deleteCommandInCart from "./deleteCommandInCart";

// export const PostItemToApi = async (cartProducts: CartProps[]) => {
//   try {
//     for (const product of cartProducts) {
//       const response = await fetch('http://localhost:3000/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(product)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Se ha enviado el objeto:', data);

//         await deleteCommandInCart(product.commandId);
//       } else {
//         throw new Error('Error en la solicitud POST');
//       }
//     }
//   } catch (error) {
//     console.error('Error al enviar los objetos:', error);
//   }
// };