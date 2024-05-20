import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jatin's | Portfolio Website",
  description: "Jatin is a backend developer with 2 years of experience",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
     <body
className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-zinc-900 dark:text-zinc-50 dark:text-opacity-90`}
>
  <div className="bg-lime-300 absolute top-[-6rem] -z-10 right-[19rem] h-[34.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#38E41]"></div>
  <div className="bg-emerald-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#3AA272]"></div>
<ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <div className="flex justify-center ">{children}</div>
            <Toaster position="bottom-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
