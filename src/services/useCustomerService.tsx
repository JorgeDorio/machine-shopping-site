import { NewCustomerFormValues } from "@/app/[tenant]/(private)/clientes/new-customer-schema";
import { useApi } from "@/hooks/useApi";
import { ICustomer } from "@/model/ICustomer";
import { AxiosError } from "axios";

export function useCustomerService() {
  const api = useApi();

  const createCustomer = async ({
    customer,
    tenant,
  }: {
    customer: NewCustomerFormValues;
    tenant: string;
  }) => {
    try {
      await api.post(`${tenant}/customer`, customer);
    } catch (e) {
      throw (e as AxiosError).response?.data as string;
    }
  };

  const getCustomers = async (tenant: string) => {
    console.log(api.head);

    const result = await api.get<ICustomer[]>(`${tenant}/customer`);
    return result.data;
  };

  return { createCustomer, getCustomers };
}
