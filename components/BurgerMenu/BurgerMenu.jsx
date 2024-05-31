import { useBurgerMenu } from "../../providers/burgerState";

export const BurgerMenu = () => {
  const burgerMenuState = useBurgerMenu();
  return (
    <>
      {burgerMenuState.isActiveBurgerMenu && (
        <div className="w-full z-50 fixed h-[calc(100%_-_71px)] top-[71px] flex">
          <div className="h-full flex flex-col bg-white w-4/5 p-7 grow justify-between md:hidden">
            <div className="flex flex-col">
              <div className="font-Inter text-dark-gray-2 font-bold">
                Páginas
              </div>
              <div className="pt-5 flex flex-col gap-3">
                <div className="font-Inter text-dark-gray-2 text-base">
                  Home
                </div>
                <div className="font-Inter text-dark-gray-2 text-base">
                  Produtos
                </div>
                <div className="font-Inter text-dark-gray-2 text-base">
                  Categorias
                </div>
                <div className="font-Inter text-dark-gray-2 text-base">
                  Meus Pedidos
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full border-t border-cyan-600 pb-4"></div>
              <div className="px-5 py-4 flex justify-center bg-Primary rounded-lg font-Inter font-bold text-sm text-white">
                <button>Entrar</button>
              </div>
              <div className="px-4 flex justify-center font-Inter text-dark-gray-2">
                <button className="underline">Cadastre-se</button>
              </div>
            </div>
          </div>
          <div className="h-full w-1/5 bg-slate-500 opacity-40" onClick={() => {burgerMenuState.setIsActiveBurgerMenu(false)}}>
          </div>
        </div>
      )}
    </>
  );
};
