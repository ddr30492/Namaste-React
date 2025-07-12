import {createContext} from "react";

const UserContext = createContext({
  user: {
    name: "Deep Darji",
  },
  setUserName: () => {}, 
}); 

export default UserContext;