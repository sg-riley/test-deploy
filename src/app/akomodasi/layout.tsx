import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akomodasi",
  description:
    "Temukan akomodasi terbaik di Desa Nyanglan, mulai dari villa mewah hingga homestay tradisional yang nyaman.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
