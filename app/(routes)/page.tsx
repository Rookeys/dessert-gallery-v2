"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
// import type { Metadata } from "next";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Main",
// };

export default function Home() {
  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title: "test title",
            description: "test description",
          });
        }}
      >
        Test button
      </Button>
    </div>
  );
}
