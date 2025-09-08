import { Footer } from '@common/footer';
import { Header } from '@common/header';
import { NotificationBar } from '@common/notification-bar';

const MainLyout = ( {
  children
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
