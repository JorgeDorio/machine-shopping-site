"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  name: string;
  phone: string;
  cpf: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "phone",
    header: "Telefone",
  },
  {
    accessorKey: "cpf",
    header: "CPF",
  },
];
