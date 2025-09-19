import { AuthenticatedProvider } from "./provider";

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthenticatedProvider>{children}</AuthenticatedProvider>;
}
