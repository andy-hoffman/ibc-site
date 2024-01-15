import type { Collection } from "tinacms";

const Instructor: Collection = {
  label: "Experience",
  name: "experience",
  path: "content/experience",
  format: "md",
  fields: [
    {
      type: "string",
      label: "Level",
      name: "level",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "Photo",
      name: "photo",
    },
    {
      type: "string",
      label: "Level",
      name: "level",
      isTitle: true,
      required: true,
    }
  ],
};
export default Instructor;
