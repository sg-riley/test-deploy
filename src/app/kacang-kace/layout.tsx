import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kacang Kace",
  description:
    "Kacang Kace, kuliner kacang khas Bali yang berasal dari Desa Nyanglan.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
