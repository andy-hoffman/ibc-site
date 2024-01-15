import { client } from "../../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { FullPageLayout } from "../../../components/layouts/FullPage";
import ClassBlock from "../../../components/classes/classBlock";
import { log } from "console";
import { TinaMarkdown } from "tinacms/dist/rich-text";


// Use the props returned by get static props
export default async function Page({ params }) {

  const name = params.coursename;
  const content = await client.queries.course({
    relativePath: `${name}.md`,
  })

  const c = content.data.course

  return ( 
    <div className="container mx-auto flex p-10 flex-wrap">
      <div className="flex-none min-w-48">
        <p>{c.day}</p>
        <p>{c.time}</p>
        <p>Location</p>
        <p>{c.level}</p>
      </div>
      <div className="min-w-48 mx-10">
        <div>
        </div>
        <div>
          <h1>{c.name}</h1>
          <span>Taught by: {c.instructor?.name}</span>
        </div>
        <div className="divider"></div>
        <div>
          <TinaMarkdown content={c.description} />
        </div>
        <div>
          <button className="btn-primary btn-large" />
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
    const tinaProps = await client.queries.courseQuery();
    const courses = tinaProps.data.courseConnection.edges

    return courses?.map((classInstance: any) => ({
            classname: classInstance.node.name
    }));

  };