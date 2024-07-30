import { GetUserById } from "@/actions";
import { auth } from "@/auth";
import { Navbar, Sidebar } from "@/components";
import { GridItem, SimpleGrid } from "@chakra-ui/react";

export async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const { data: user } = await GetUserById(session?.user.id!);

  return (
    <main>
      <Navbar user={user!} />
      <SimpleGrid columns={{ base: 1, md: 12 }} bg={"grey.100"}>
        <GridItem colSpan={{ md: 2 }} display={{ base: "none", md: "block" }}>
          <Sidebar user={user!} />
        </GridItem>
        <GridItem
          colSpan={{ md: 10 }}
          shadow={"lg"}
          bg={"grey.100"}
          maxH={"90vh"}
          overflowY={"scroll"}
          p={{ base: 5, md: 10 }}
        >
          {children}
        </GridItem>
      </SimpleGrid>
    </main>
  );
}
