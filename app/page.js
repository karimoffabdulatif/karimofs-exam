import { Calatog, Action, Banner, Usefull, Advantages, Abaut, Companies } from "@/components/ui";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <Calatog />
        <Action />
        <Usefull/>
        <Advantages/>
        <Abaut/>
        <Companies/>
      </main>
    </>
  );
}
