"use client";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NewCustomerFormValues,
  newCustomerSchema,
} from "./new-customer-schema";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCustomer } from "@/services/useCustomerService";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTenant } from "@/hooks/useTenant";

export function NewCustomerDialog() {
  const tenant = useTenant();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);

  const form = useForm<NewCustomerFormValues>({
    resolver: zodResolver(newCustomerSchema),
    defaultValues: {
      name: "",
      cpf: "",
      phone: "",
    },
  });

  const create = useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      toast("Cliente cadastrado com sucesso");
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
    onError: (e: string) => {
      toast.error(e);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((customer) =>
              create.mutate({ customer, tenant })
            )}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nome do cliente"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Telefone apenas números"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="CPF apenas números"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Cadastrar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
