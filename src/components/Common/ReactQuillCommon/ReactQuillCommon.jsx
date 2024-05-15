import React from "react";
import { useRef, useMemo, useEffect, useCallback } from "react";
import ReactQuill from "react-quill";
const ReactQuillCommon = ({ text, setText,textDes,setTextDes, title, setvalueAlignHeading,setvalueAlignDes }) => {
  const quillRef = useRef(null);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link"],
          [{ align: [] }], // Alignment options

          ["clean"],
        ],
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    []
  );
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "color",
    "clean",
  ];

  useEffect(() => {
    const quill = quillRef.current.editor;
    if (quill) {
      quill.keyboard.addBinding(
        {
          key: "Enter",
        },
        (range, context) => {
          quill.insertText(range.index, "\n");
          quill.setSelection(range.index + 1);
          return false;
        }
      );
    }
  }, []);

  const handleChangeAlignHeading = useCallback(
    (content, delta, source, editor) => {
      const quillEditor = quillRef.current.getEditor();
      const selection = quillEditor.getSelection();

      if (selection) {
        const [line, offset] = quillEditor.getLine(selection.index);
        const formats = quillEditor.getFormat(offset - 1);

        const align = formats.align || "left";
        setvalueAlignHeading(align);
      } else {
        console.log("No text selected.");
      }
    },
    []
  );
  const handleChangeAlignDes = useCallback(
    (content, delta, source, editor) => {
      const quillEditor = quillRef.current.getEditor();
      const selection = quillEditor.getSelection();

      if (selection) {
        const [line, offset] = quillEditor.getLine(selection.index);
        const formats = quillEditor.getFormat(offset - 1);

        const align = formats.align || "left";
        setvalueAlignDes(align);
      } else {
        console.log("No text selected.");
      }
    },
    []
  );
  const handleChange = (value) => {
    handleChangeAlignDes();
    setTextDes(value);
  };
  const handleChangeHeading = (value) => {
    handleChangeAlignHeading();

    setText(value);
  };
  return (
    <ReactQuill
      ref={(el) => (quillRef.current = el)}
      // ref={quillRef}
      formats={formats}
      modules={modules}
      value={title === "heading" ? text : textDes}
      onChange={title === "heading" ? handleChangeHeading : handleChange}
    />
  );
};

export default ReactQuillCommon;
