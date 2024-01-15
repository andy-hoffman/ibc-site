"use client"
import { Hero, Button } from "react-daisyui";
import { useRouter } from 'next/navigation'

type HeroSliderProps = {
  headline: string;
  body: string;
  label: string;
  url: string;
  bgImage: string;
}

export default function HeroSlider(props: HeroSliderProps) {
  const { headline, body, label, url, bgImage } = props;
  const router = useRouter();

return (
  <Hero className="bg-base-300 h-[36rem] bg-opacity-60 text-slate-100"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Hero.Content className="text-left w-full justify-start text-center">
      <div className="align-center max-w-96 justify-left">
        <h2 className="text-5xl font-bold align-middle text-center">{headline}</h2>
        <p className="py-6 justify-left text-slate-100 text-center w-full text-balance">
          {body}
        </p>
        <Button color="primary" wide={true} onClick={() => router.push(url)}>{label}</Button>
      </div>
      
    </Hero.Content>
  </Hero>
)
}