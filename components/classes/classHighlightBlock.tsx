import { ReactNode } from "react";
import Image from "next/image";

export type ClassHighlightBlockProps = {
  bgColor: string;
  title: string;
  description: string;
  dateTime: string;
  link: string;
  id: string;
  instructor: {
    name: string;
    image: string;
    bio: string;
  },
}

const ClassHighlightBlock = (params: ClassHighlightBlockProps ) : JSX.Element => {

  const { bgColor, title, description, link, id, instructor, dateTime } = params;

  const wrapperClassNames = `size-40 {BgColor} text-center`;
  return (
    <div className={wrapperClassNames}>
      <a href={link}>
        <div className="mx-auto justify-center">{title}</div>
        <div>
          <Image src={instructor.image} alt={instructor.name} className="clip-path:circle(50px at 0 100px)"  />
          <span>{instructor.name}</span>
        </div>
        <div>{dateTime}</div>
      </a>
    </div>  
  )
}

export default ClassHighlightBlock;