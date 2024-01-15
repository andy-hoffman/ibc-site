import { Menu } from "react-daisyui";
import { client } from "../../tina/__generated__/client";
import Instructor from "@/tina/collection/instructor";



export default async function InstructorsMenu() {

  const tinaProps = await client.queries.instructorsQuery();
  const instructors = tinaProps.data.instructorConnection.edges

  return (
    <Menu.Item>
      <details className="hover:border-solid hover:border-red-500">
        <summary className="font-bold text-lg">Instructors</summary>
        <ul className="z-50 p-2 w-full bg-neutral-300">
          {instructors?.map((ins: typeof Instructor) => {
            return (
              <Menu.Item key={ins.node._sys.filename}>
                <a href={`/instructors/${ins.node._sys.filename}`}>{ins.node.name}</a>
              </Menu.Item>
            )
          })}
          <Menu.Item>
            <a>Course Overview</a>
          </Menu.Item>
        </ul>
      </details>
    </Menu.Item>
  )
}