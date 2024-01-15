import type { Collection } from "tinacms";

const Course: Collection = {
  label: "Coursses",
  name: "course",
  path: "content/courses",
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
      type: "string",
      label: "Day of Week",
      name: "day",
    },
    {
      type: "string",
      label: "Time",
      name: "time",
    },
    {
      type: "boolean",
      label: "Active",
      name: "active",
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    },
    {
      type: "rich-text",
      label: "Description",
      name: "description",
    },
    {
      type: "string",
      label: "level",
      name: "level",
    },
    {
      type: "reference",
      label: "Instructor",
      name: "instructor",
      collections: ["instructor",],
    }
  ],
};
export default Course;
