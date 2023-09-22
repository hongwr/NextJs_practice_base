import notFound from "@/app/not-found";
import getProducts, { getProduct } from "@/service/products";

type Props = {
    params: {
        slug: string;
    }
};

// 동기적인 seo 적용
export function generateMetadata ({ params } : Props) {
    return {
        title: `제품의 이름: ${params}`
    }
};

export default function PantsPage({ params: {slug} } : Props) {
    const product = getProduct(slug);
    console.log(product);
    if (!product) {
        notFound();
    }

  return (
    <div>{product} 사용 설명서</div>
  )
};

// 미리 페이지 만들기. 빌드 시점에 정적으로 생성된다. 미리 html에 만들어 두느냐 마느냐. ssr이기 때문에 사용자와 상호작용을 할 때 만들어지는 것이 맞는데, 그 이전에 미리 만들어 두는 것.
export function generateStaticParams() {
    const products = getProducts();
    return products.map(product => ({
        slug: product
    }))
};