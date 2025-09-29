import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "./AddToCartButton";

type Product = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  details: {
    description: string;
    light: string;
    water: string;
    size: string;
  };
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`http://localhost:5000/plants/${params.id}`);
  if (!res.ok) {
    notFound();
  }
  const product: Product = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <Link
        href="/products"
        className="text-green-600 border rounded p-2 hover:text-green-800"
      >
        Back to all plants
      </Link>
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        unoptimized
        className="w-full h-80 object-contain mb-6"
      />
      <h1 className="text-3xl font-bold mb-2 text-green-700">
        {product.title}
      </h1>
      <h2 className="text-lg text-gray-500 mb-4">{product.subtitle}</h2>
      <p className="text-xl text-green-600 font-semibold mb-4">
        ${product.price}
      </p>

      <p className="text-gray-700 mb-4">{product.details.description}</p>
      <ul className="text-gray-600 space-y-2">
        <li>
          <strong>Light:</strong> {product.details.light}
        </li>
        <li>
          <strong>Water:</strong> {product.details.water}
        </li>
        <li>
          <strong>Size:</strong> {product.details.size}
        </li>
      </ul>
      <AddToCartButton
        product={{
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        }}
      />
    </div>
  );
}
