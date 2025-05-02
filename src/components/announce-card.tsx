import * as React from "react";
import moment from "moment";

import { Card, CardContent } from "@/components/ui/card";
import { formatValue } from "@/lib/utils";
import { Button } from "./ui/button";
import { Check, Copy, Pause } from "lucide-react";

interface IAnnounceCardProps {
  title: string;
  value: number;
  announceDate: Date;
}

export function AnnounceCard({
  title,
  value,
  announceDate,
}: IAnnounceCardProps) {
  return (
    <Card className="w-4xl">
      <CardContent className="flex gap-8">
        <img
          src="https://picsum.photos/200"
          alt={title}
          className="rounded-lg h-32"
        />
        <div className="flex justify-between flex-col">
          <div>
            <h1 className="font-semibold text-xl">{title}</h1>
            <p className="text-sm opacity-75">{formatValue(value)}</p>
            <p className="text-sm opacity-75">
              {moment(announceDate).format("DD/MM/YYYY")}
            </p>
          </div>
          <div className="space-x-2">
            <Button>
              <Pause /> Pausar anúncio
            </Button>
            <Button variant="outline">
              <Copy />
              Copiar link
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
