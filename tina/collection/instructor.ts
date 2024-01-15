import type { Collection } from "tinacms";

const Instructor: Collection = {
  label: "Instructors",
  name: "instructor",
  path: "content/instructors",
  format: "md",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "Photo",
      name: "photo",
    },
    {
      type: "rich-text",
      label: "Bio",
      name: "bio",
    },
    {
      type: "reference",
      label: "Courses",
      name: "courses",
      collections: ["course",],
    }
  ],
};
export default Instructor;
