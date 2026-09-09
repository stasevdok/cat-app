import Image from "next/image";
import Link from "next/link";

const breeds = [
  { name: "Сиамская кошка", href: "/siamese", image: "/cats/siamese-1.jpg" },
  { name: "Британская кошка", href: "/british", image: "/cats/british-1.jpg" },
];

export default function Home() {
  return (
    <main className="container">
      <h1>Кошки</h1>
      <p className="intro">Выберите породу, чтобы посмотреть фотографии.</p>
      <div className="cards">
        {breeds.map((breed) => (
          <Link className="card" href={breed.href} key={breed.href}>
            <Image src={breed.image} alt={breed.name} width={450} height={300} />
            <h2>{breed.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
