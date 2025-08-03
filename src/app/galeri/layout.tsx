import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Jelajahi keindahan alam, budaya, dan momen berharga di Desa Wisata Nyanglan melalui galeri foto kami.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
