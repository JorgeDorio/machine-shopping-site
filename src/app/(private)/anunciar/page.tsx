"use client";

import { AnnounceCard } from "@/components/announce-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Announce() {
  const router = useRouter();
  return (
    <div className="m-16 space-y-8">
      <Button
        className="font-extrabold"
        onClick={() => router.push("/anunciar/novo")}
      >
        Criar novo anúncio
      </Button>
      <Card className="px-6 flex flex-row w-4xl items-center justify-between ">
        <h1 className="text-2xl font-extrabold">Seus Anúncios</h1>
        <div>
          <Input type="text" placeholder="Pesquisar seu anúncios" />
        </div>
      </Card>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 50 }).map((x) => (
          <AnnounceCard title="trator" value={10} announceDate={new Date()} />
        ))}
      </div>
    </div>
  );
}
