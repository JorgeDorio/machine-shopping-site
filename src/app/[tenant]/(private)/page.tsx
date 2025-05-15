"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date>();
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
}
