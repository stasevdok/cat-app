import BreedPage from "../components/BreedPage";

export const metadata = { title: "Британская кошка" };

export default function BritishPage() {
  return <BreedPage name="Британская кошка" photos={["/cats/british-1.jpg", "/cats/british-2.jpg"]} />;
}
