import Image from "next/image";
import Link from "next/link";
import LikeButton from "./LikeButton";

export default function BreedPage({ name, photos }) {
  return (
    <main className="container">
      <Link className="back-link" href="/">← На главную</Link>
      <h1>{name}</h1>
      <div className="gallery">
        {photos.map((photo, index) => (
          <Image key={photo} src={photo} alt={`${name}, фото ${index + 1}`} width={450} height={350} />
        ))}
      </div>
      <LikeButton />
    </main>
  );
}
