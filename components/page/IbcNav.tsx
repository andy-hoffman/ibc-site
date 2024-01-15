import Image from "next/image"
import { Button, Dropdown, Menu, Navbar } from "react-daisyui"
import { ReactNode } from "react"
import CourseMenu from "../classes/courseMenu"
import Instructor from "@/tina/collection/experience"
import InstructorsMenu from "../instructors/instructorsMenu"

export default async function IbcNav() {



  const instructorMenu = await InstructorsMenu()
  const courseMenu = await CourseMenu()

  return (
      <>
      <Navbar>
        <Navbar.Start>
        <Dropdown>
            <Button tag="label" color="ghost" tabIndex={0} className="sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-50">
              <Dropdown.Item>Item 1</Dropdown.Item>
              <li>
                <a>Parent</a>
                <ul className="z-50 p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <Dropdown.Item>Item 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Start>
        <Navbar.Center className="w-full max-sm:hidden">
          <Menu horizontal className="grid grid-flow-col w-full menu-lg">
            <Menu.Item className="hover:border-solid hover:border-red-500">
              <a className="text-red-500 font-bold text-lg">Home</a>
            </Menu.Item>
            <Menu.Item className="hover:border-solid hover:border-red-500">
              <details>
                <summary className="font-bold text-lg">About</summary>
                <ul className="z-50 p-2 w-full bg-neutral-300">
                  <Menu.Item>
                    <a>Geshe Jimpa Sonam</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Instructors</a>
                   {instructorMenu}
                  </Menu.Item>
                  <Menu.Item>
                    <a>Lineage</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Donations</a>
                  </Menu.Item>
                </ul>
              </details>
            </Menu.Item>
            <Menu.Item className="hover:border-solid hover:border-red-500">
              <a className="font-bold text-lg">
                Events
              </a>
            </Menu.Item>
            {courseMenu}
            <Menu.Item>
              <details>
                <summary className="font-bold text-lg">Resources</summary>
                <ul className="z-50 p-2 w-full bg-neutral-300">
                  <Menu.Item>
                    <a>Geshe Jimpa Sonam's Teachings</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>About Tibet</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Recommended Reading</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Interfaith Community</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Archives</a>
                  </Menu.Item>
                </ul>
              </details>
            </Menu.Item>
            <Menu.Item>
              <details className="hover:border-solid hover:border-red-500">
                <summary className="font-bold text-lg">Visit</summary>
                <ul className="z-50 p-2 w-full bg-neutral-300">
                  <Menu.Item>
                    <a>I'm New</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Contact Info</a>
                  </Menu.Item>
                </ul>
              </details>
            </Menu.Item>
          </Menu>
        </Navbar.Center>
        <Navbar.End>
          
        </Navbar.End>
      </Navbar>
      </>
  )
}
