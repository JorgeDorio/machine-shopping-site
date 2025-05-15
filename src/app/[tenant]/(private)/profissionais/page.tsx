import { DataTable } from "./data-table";
import { NewCustomerDialog } from "./new-customer-dialog";

export default async function DemoPage() {
  return (
    <div className="container mx-auto p-10">
      <NewCustomerDialog />
      <DataTable />
    </div>
  );
}
