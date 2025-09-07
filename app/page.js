import MeltingCheesePage from "@/components/melting-cheese";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
    <main className="min-h-screen p-4 flex flex-col items-center justify-center">
      <MeltingCheesePage/>
    </main>
    <Footer/>
    </>
  );
}
