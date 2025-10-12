import { Footer, Header, NotificationBar } from "@components";

const MainLyout = ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) => {
  return (
    <>
      <NotificationBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLyout;
