import { Layout as CartCheckoutLayout } from "@pages";

type LayoutProps = {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ( { children } ) => {
  return (
    <CartCheckoutLayout>
      {children}
    </CartCheckoutLayout>
  )
}
export default Layout