"use server";

import { Header } from "@/app/(account)/components/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="pt-8">{children}</div>
    </>
  );
}
