import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { DigitalIconMobile } from "../DigitalIconMobile/DigitalIconMobile";
import { DigitalIcon } from "../DigitalIcon/DigitalIcon";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { CartIcon } from "../CartIcon/CartIcon";
import { useState } from "react";
import { useBurgerMenu } from "../../providers/burgerState";

function Header() {
  const [isActiveSeachBar, setIsActiveSeachBar] = useState(false);
  const [valueSearchBar, setValueSearchBar] = useState("");
  const burgerMenuState = useBurgerMenu();
  return (
    <>
      <div className="fixed w-full p-5 md:px-15 lg:px-20 flex flex-col gap-5 bg-white">
        <div className="flex flex-row items-center justify-between ">
          <div className="md:hidden">
            <button
              onClick={() => {
                burgerMenuState.setIsActiveBurgerMenu(
                  !burgerMenuState.isActiveBurgerMenu
                );
                if (isActiveSeachBar === true) {
                  setIsActiveSeachBar(false);
                }
              }}
            >
              <BurgerIcon />
            </button>
          </div>
          <div className="flex gap-1 md:gap-2 items-center text-nowrap">
            <div className="flex md:hidden">
              <DigitalIconMobile />
            </div>
            <div className="hidden md:flex">
              <DigitalIcon />
            </div>
            <div className="font-Inter font-semibold text-Primary text-xl md:text-xl lg:text-3xl">
              Digital Collage
            </div>
          </div>

          <div className="md:gap-10 hidden md:flex w-4/6 px-3">
            <div className="w-full px-5 flex items-center bg-slate-200 rounded-lg justify-between">
              <input
                className="w-full bg-slate-200 rounded-lg focus:outline-none"
                type="text"
                placeholder="Pesquisar produto..."
                value={valueSearchBar}
                onChange={(event) => setValueSearchBar(event.target.value)}
              />
              <div>
                <SearchIcon />
              </div>
            </div>
            <div>
              <button className="py-4 text-nowrap font-Inter font-normal text-base underline text-dark-gray-2">
                Cadastre-se
              </button>
            </div>
            <div>
              <button className="px-5 py-4 bg-Primary rounded-lg font-Inter font-bold text-sm text-white">
                Entrar
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="md:hidden"
              onClick={() => {
                setIsActiveSeachBar(!isActiveSeachBar);
                if (burgerMenuState.isActiveBurgerMenu === true) {
                  burgerMenuState.setIsActiveBurgerMenu(false);
                }
              }}
              value={valueSearchBar}
            >
              <SearchIcon />
            </button>
            <div>
              <CartIcon />
            </div>
          </div>
        </div>
        {isActiveSeachBar && (
          <div className="pr-5 flex items-center gap-10 bg-slate-200 rounded-lg md:hidden">
            <input
              className="w-full px-5 py-4 bg-slate-200 rounded-lg focus:outline-none"
              type="text"
              placeholder="Pesquisar produto..."
              value={valueSearchBar}
              onChange={(event) => setValueSearchBar(event.target.value)}
            />
            <div>
              <SearchIcon />
            </div>
          </div>
        )}
        <div className="hidden md:flex gap-8">
          <div>
            <button className="font-Inter text-dark-gray-2 hover:underline underline-offset-8 hover:font-bold hover:text-Primary hover:tracking-tight	">
              Home
            </button>
          </div>
          <div>
            <button className="font-Inter text-dark-gray-2 hover:underline underline-offset-8 hover:font-bold hover:text-Primary hover:tracking-tight	">
              Produtos
            </button>
          </div>
          <div>
            <button className="font-Inter text-dark-gray-2 hover:underline underline-offset-8 hover:font-bold hover:text-Primary hover:tracking-tight">
              Categorias
            </button>
          </div>
          <div>
            <button className="font-Inter text-dark-gray-2 hover:underline underline-offset-8 hover:font-bold hover:text-Primary hover:tracking-tight">
              Meus pedidos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
