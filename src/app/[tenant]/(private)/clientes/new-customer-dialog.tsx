import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewCustomerDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Novo Cliente</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cadastro de novo cliente</DialogTitle>
          <DialogDescription>
            Insira os dados do cliente que será cadastrado. Clique em cadastrar
            quando finalizar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Telefone
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              CPF
            </Label>
            <Input id="cpf" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Cadastrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
