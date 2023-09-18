
type Props = {
    params: {
        slug: string;
    }
};

export default function PantsPage(props: Props) {
  return (
    <div>{props.params.slug} 바지 사용 설명서</div>
  )
}

// 미리 페이지 만들기. 빌드 시점에 정적으로 생성된다. 미리 html에 만들어 두느냐 마느냐. ssr이기 때문에 사용자와 상호작용을 할 때 만들어지는 것이 맞는데, 그 이전에 미리 만들어 두는 것.
export function generateStaticParams() {
    const products = ['pants', 'skirts'];
    return products.map(product => ({
        slug: product
    }))
}