import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { NewCustomerDialog } from "./new-customer-dialog";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      name: "pending",
      cpf: "m@example.com",
      phone: "123123",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto p-10">
      <NewCustomerDialog />

      <DataTable columns={columns} data={data} />
    </div>
  );
}
