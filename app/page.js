import { Calatog, Products, Banner, Usefull, Advantages, Abaut, Companies } from "@/components/ui";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <Calatog/> 
        
        <Products />
        <Usefull/>
        <Advantages/>
        <Abaut/>
        <Companies/>
      </main>
    </>
  );
}
