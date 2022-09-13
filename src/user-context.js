import React from "react";

const userContext = React.createContext({"admin": false, "isLoggedIn": false});
export const AdminContext = React.createContext({"admin": true});
export default userContext;