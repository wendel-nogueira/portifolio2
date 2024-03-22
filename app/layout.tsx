import "../styles/globals.css";
import Header from "@/components/Header/header";
import Body from "@/components/Body/body";
import Footer from "@/components/Footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full min-h-screen bg-[url('/background.svg')] bg-no-repeat bg-cover flex flex-col items-center before:content-[''] before:absolute before:inset-0 before:bg-black before:-z-10">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
}
