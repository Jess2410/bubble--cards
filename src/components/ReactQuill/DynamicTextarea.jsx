import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6] }],
      [{ size: ["extra-small", "small", "medium", "large"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: ["left", "center", "right", "justify"] }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
    ],
  },
};

export const DynamicTextarea = ({ onChange, value }) => {
  return (
    <ReactQuill
      style={{
        width: "100%",
        minHeight: 200,
        height: 300,
        boxSizing: "border-box",
        position: "relative",
        border: "1px solid #ebebeb",
        fontFamily: "Open Sans Medium",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 14,
        backgroundColor: "white",
      }}
      theme="snow"
      modules={modules}
      onChange={onChange}
      value={value}
    />
  );
};
