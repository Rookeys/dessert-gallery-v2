"use client";

import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <section>
      <Button variant={"ghostPrimary"}>가게 게시판</Button>
      <Button variant={"ghostPrimary"}>후기 게시판</Button>
      <Button variant={"ghostPrimary"}>지도로 찾기</Button>
    </section>
  );
};
