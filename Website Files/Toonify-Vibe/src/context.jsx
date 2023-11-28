import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://Toonifyreactapi.up.railway.app";

const intialState = {
  name: "",
  image: "",
  Gallary: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "ToonifyVibe",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateToCreatePage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Vinod Toonify",
        image: "./images/about1.svg",
      },
    });
  };

  //  to get the api data
  const getGallary = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_Gallary", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getGallary(API);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, updateHomePage, udpateToCreatePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
