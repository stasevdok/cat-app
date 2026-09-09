import BreedPage from "../components/BreedPage";

export const metadata = { title: "Сиамская кошка" };

export default function SiamesePage() {
  return <BreedPage name="Сиамская кошка" photos={["/cats/siamese-1.jpg", "/cats/siamese-2.jpg"]} />;
}
