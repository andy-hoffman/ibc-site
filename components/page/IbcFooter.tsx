import { Theme, Badge, Button, Dropdown, Indicator, Navbar, Menu, Footer } from 'react-daisyui'
import Image from 'next/image'
const IbcFooter = function() {
  return (
    <Footer className="p-10 bg-yellow-500 text-black">
    <div>
      <Image src="/images/ibc-logo.png" width={186} height={186} alt="IBC Logo With Dharma Wheel" />
    </div>
    <div>
      <Footer.Title className="text-emphasis text-lg">Address</Footer.Title>
      <p>
        Indiana Buddhist Center<br />
        7528 Thompson Rd. <br />
        Indianapolis, IN 46239<br />
      </p>
      <p className="pt-5">admin@indianabuddhist.org</p>
    </div>
    <div>
      <Footer.Title className="text-emphasis text-lg">Links</Footer.Title>
      <a className="link link-hover">Events</a>
      <a className="link link-hover">Teachings</a>
      <a className="link link-hover">Contact Us</a>
    </div>
  </Footer>
  )
}

export default IbcFooter