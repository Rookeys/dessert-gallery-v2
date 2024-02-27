import { Header } from '@/components/common/header';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
};

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
