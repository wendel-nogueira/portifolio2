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
    <div className="w-full h-full bg-black">
      <div className="w-full h-full min-h-screen bg-[url('/background.svg')] bg-no-repeat bg-cover flex flex-col items-center">
        <Header className="[&>*]:animate-fade-in-0.5" />
        <Body className="[&>*]:animate-fade-in-1.5">{children}</Body>
        <Footer className="[&>*]:animate-fade-in-0.5" />
      </div>
    </div>
  );
}
