import  React ,{ createContext , useState  } from "react";


export  const User = createContext({});

const Context  = ({children }) => {
    const [userData , setUserData ] = useState<any>();
    
  return   (<User.Provider
    value={{ userData, setUserData }}
  >   
   {children}
   </User.Provider>); 
}

export default Context;