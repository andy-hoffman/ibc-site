import Image from "next/image"
import { Button, Dropdown, Menu, Navbar } from "react-daisyui"
import IbcNav  from "./IbcNav"

export default async function IbcHeader() {


  const ibcNav = await IbcNav()

  return (
    <div className="w-full p-20 pb-4 bg-base-100" data-theme="light">
    <div role="navigation" aria-label="main navigation">
      <div className="w-full h-full my-4 flex">
        <div className="flex-none content-center h-full w-85">
          <Image src="/images/ibc-logo.png" width={85} height={85} alt="IBC Logo With Dharma Wheel" />
        </div>
        <div className="flex-grow lg:text-4xl sm:text-xl text-balance align-bottom font-bold p-5">
          Indiana Buddhist Center
        </div>
        <div className="w-full block lg:flex lg:items-right lg:w-auto center-content justify-end p-5">
          <Button className="hover:shadow active:shadow-inner" 
            wide={true}
            shape="square"
            type="button"
            color="primary" >Donate</Button>
        </div>
      </div>
      {ibcNav}
    </div>
  </div>
  )
}
