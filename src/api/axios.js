import axios from "axios";

/**
 * HELPER FUNCTIONS
 */
export const fetchData = async url => {
  if (!url) {
    throw new Error("No URL provided");
  }
  try {
    const res = await herokuAxios.get(url);
    return res.data;
  } catch (err) {
    return `fetchData Error: ${err}`;
  }
};

// If User is Authenticated
// Then get data
// const getAuthHeader = authState => {
//   if (!authState.isAuthenticated) {
//     throw new Error("Not authenticated");
//   }
//   return { Authorization: `Bearer ${authState.idToken}` };
// };

// export const fetchAuthData = async (url, authState) => {
//   const headers = getAuthHeader(authState);
//   if (!url) {
//     throw new Error("No URL provided");
//   }
//   try {
//     const res = await herokuAxios.get(url, { headers });
//     return res.data;
//   } catch (err) {
//     return `fetchAuthData Error: ${err}`;
//   }
// };

// Authentication Helper function
// export async function checkAuthentication(authState, authService, userInfo, setUserInfo) {
//   const authenticated = await authState.isAuthenticated;
//   if (authenticated === authState.isAuthenticated) {
//     if (authenticated && !userInfo) {
//       const info = await authService.getUser();
//       setUserInfo(info);
//     }
//   } else {
//     return setUserInfo(null);
//   }
// }

// Get user profile picture
// replace randomuser.me API with backend once working
export const userAvatar = async () => {
  return userAvatarAxios.get().then(res => res.data);
};

export const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

/**
 * AXIOS CALLS
 */
// Main Axios
// export const mainAxios = axios.create({
//   baseURL: `${process.env.REACT_APP_API_URI}`,
// });

// For All calls to the heroku API
export const herokuAxios = axios.create({
  baseURL: "https://cityspire-d-be.herokuapp.com",
});

// Calls to Random User API
// Replace once user profile pic is updated on backend
export const userAvatarAxios = axios.create({
  baseURL: "https://api.allorigins.win/raw?url=https://randomuser.me/api/",
});
