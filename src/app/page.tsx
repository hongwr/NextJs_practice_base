import Counter from '@/components/Counter';
import Image from 'next/image'

export default function Home() {
  console.log('안녕!');
  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
    </>
  )
}
