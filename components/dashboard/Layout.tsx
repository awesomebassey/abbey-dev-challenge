import { Navbar, Sidebar } from "@/components";
import { GridItem, SimpleGrid } from "@chakra-ui/react";

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <SimpleGrid columns={{ base: 1, md: 12 }} bg={"grey.100"}>
        <GridItem colSpan={2} display={{base: "none", md: "block"}}>
          <Sidebar />
        </GridItem>
        <GridItem
          colSpan={10}
          shadow={"lg"}
          bg={"grey.100"}
          maxH={"90vh"}
          overflowY={"scroll"}
        >
          {children}
        </GridItem>
      </SimpleGrid>
    </main>
  );
}
