import { notFound } from "next/navigation";
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if(parseInt(reviewId )> 1000){
    notFound();
  }
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
// http://localhost:3000/products/1/reviews/1
// http://localhost:3000/products/5/reviews/100