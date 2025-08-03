import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kuliner",
  description:
    "Jelajahi cita rasa kuliner khas Desa Wisata Nyanglan yang menggugah selera.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
