// import ECommerce from "@/components/Dashboard/E-commerce";
import { signOut } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TailAdmin | E-commerce Dashboard Tempalte",
  description: "This is Home for TailAdmin",
  // other metadata
};

export default function Home() {
  return (
    <>
      {/* <ECommerce /> */}
      <h1>ADMIN</h1>

    </>
  );
}
