import { Header } from '@/components/common/header';
import { Button } from '@/components/ui/button';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
};

export default function Home() {
  return (
    <div className='p-4'>
      <Header />
      <Button>Test</Button>
    </div>
  );
}
