import { createContext, useContext, useState } from "react";

export const BurgerMenuContext = createContext({
  isActiveBurgerMenu: false,
  setIsActiveBurgerMenu: () => null,
});

export const BurgerMenuProvider = ({ children }) => {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const setIsActive = (stateBoolean) => {
    setIsActiveBurgerMenu(stateBoolean);
    const body = document.querySelector("body");
    if(!isActiveBurgerMenu){
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  };

  return (
    <BurgerMenuContext.Provider value={{ isActiveBurgerMenu, setIsActiveBurgerMenu: setIsActive}}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

export const useBurgerMenu = () => {
  const context = useContext(BurgerMenuContext);
  return context;
};
