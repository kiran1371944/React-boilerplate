// import axios, { AxiosResponse } from 'axios';
// import * as jsCookie from 'js-cookie';

// interface ApiResponse<T> {
//   data: T;
// }

// interface RequestOptions {
//   [key: string]: unknown;
// }

// const api = {
//   get: async <T>(url: string, params: RequestOptions = {}): Promise<T> => {
//     try {
//       const response: AxiosResponse<ApiResponse<T>> = await axios.get(url, {
//         headers: {
//           token: jsCookie.get('token'),
//         },
//         ...params,
//       });
//       return response.data.data;
//     } catch (error) {
//       // Handle error
//       console.error('Error in GET request:', error);
//       throw error;
//     }
//   },

//   post: async <T>(url: string, data: unknown): Promise<T> => {
//     try {
//       const response: AxiosResponse<ApiResponse<T>> = await axios.post(
//         url,
//         data,
//         {
//           headers: {
//             token: jsCookie.get('token'),
//           },
//         }
//       );
//       return response.data.data;
//     } catch (error) {
//       // Handle error
//       console.error('Error in POST request:', error);
//       throw error;
//     }
//   },

//   patch: async <T>(url: string, data: unknown): Promise<T> => {
//     try {
//       const response: AxiosResponse<ApiResponse<T>> = await axios.patch(
//         url,
//         data,
//         {
//           headers: {
//             token: jsCookie.get('token'),
//           },
//         }
//       );
//       return response.data.data;
//     } catch (error) {
//       // Handle error
//       console.error('Error in PATCH request:', error);
//       throw error;
//     }
//   },

//   delete: async <T>(url: string): Promise<T> => {
//     try {
//       const response: AxiosResponse<ApiResponse<T>> = await axios.delete(url, {
//         headers: {
//           token: jsCookie.get('token'),
//         },
//       });
//       return response.data.data;
//     } catch (error) {
//       // Handle error
//       console.error('Error in DELETE request:', error);
//       throw error;
//     }
//   },
// };

// export default api;
