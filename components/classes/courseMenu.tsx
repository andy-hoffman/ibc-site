import { Menu } from "react-daisyui";
import { client } from "../../tina/__generated__/client";
import Course from "@/tina/collection/course";



export default async function CourseMenu() {

  const tinaProps = await client.queries.courseQuery();
  const courses = tinaProps.data.courseConnection.edges

  return (
    <Menu.Item>
      <details className="hover:border-solid hover:border-red-500">
        <summary className="font-bold text-lg">Courses</summary>
        <ul className="z-50 p-2 w-full bg-neutral-300">
          {courses?.map((course: typeof Course) => {
            return (
              <Menu.Item key={course.node._sys.filename}>
                <a href={`/courses/${course.node._sys.filename}`}>{course.node.name}</a>
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