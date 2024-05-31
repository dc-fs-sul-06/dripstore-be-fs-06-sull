import { BurgerMenuProvider } from "@/providers/burgerState";
import { CartProvider } from "@/providers/cart";
import { ProductsProvider } from "@/providers/products";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <ProductsProvider>
        <BurgerMenuProvider>
          <Component {...pageProps} />
        </BurgerMenuProvider>
      </ProductsProvider>
    </CartProvider>
  );
}
