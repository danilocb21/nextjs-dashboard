import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  return <CustomersTable query={query} />;
}
