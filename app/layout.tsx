import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToastProvider from "./providers/ToasterProvider";
import SearchModal from "./components/modals/SearchModal";
// import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AirBnb",
  description: "AirBnb Clone",
};
export default function RootLayout({
  // export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <SearchModal />
          <LoginModal />
          <RegisterModal />
          <Navbar />
          {/* <Navbar currentUser={currentUser} /> */}
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
