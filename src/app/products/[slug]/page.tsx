
type Props = {
    params: {
        slug: string;
    }
};

export default function PantsPage(props: Props) {
    console.log(props)
  return (
    <div>{props.params.slug} 바지 사용 설명서</div>
  )
}
