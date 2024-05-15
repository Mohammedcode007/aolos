import styles from "../../../global.module.css";
import { PopupHeader } from "../PopupHeader";
import { useRef, useMemo, useEffect, useCallback } from "react";
import ReactQuill from "react-quill";

export const ParagraphPopup = ({
  title,
  setBold,
  setHeadingCounter,
  setvalueHeading,
  setvalueAlignHeading,
  setvalueAlignPar,
  setvalueParg,
  valueParg,
  valueHeading,
  setText,
  text,
  setTextHeading,
  textHeading,
  idParg,
  setParagraphCounter,
  setItalic,
  setUnderline,
  setHeading,
  setLines,
  lines,
  setLinesParg,
  linesParg,
  heading,
  styleDisc,
  setstyleDisc,
  styleDecimal,
  setstyleDecimal,
  setAlign,
  align,
  setFormField,
  handleSaveClick,
}) => {
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
  const updateHeadingValue = (idToUpdate, newValue) => {
    setHeadingCounter((prevArray) => {
      return prevArray.map((item) => {
        if (item.id === idToUpdate) {
          return { ...item, value: newValue };
        }
        return item;
      });
    });
  };

  const updatePargValue = (idToUpdate, newValue) => {
    setParagraphCounter((prevArray) => {
      return prevArray.map((item) => {
        if (item.id === idToUpdate) {
          return { ...item, value: newValue };
        }
        return item;
      });
    });
  };

  const handleChangeAlignHeading = useCallback(
    (content, delta, source, editor) => {
      const quillEditor = quillRef.current.getEditor();
      const selection = quillEditor.getSelection();

      if (selection) {
        const [line, offset] = quillEditor.getLine(selection.index);
        const formats = quillEditor.getFormat(offset - 1);
        setvalueAlignHeading(formats.align);
      } else {
        console.log("No text selected.");
      }
    },
    []
  );
  const handleChangeAlignPar = useCallback((content, delta, source, editor) => {
    const quillEditor = quillRef.current.getEditor();
    const selection = quillEditor.getSelection();

    if (selection) {
      const [line, offset] = quillEditor.getLine(selection.index);
      const formats = quillEditor.getFormat(offset - 1);
      setvalueAlignPar(formats.align);
    } else {
      console.log("No text selected.");
    }
  }, []);
  const handleChange = (value) => {
    handleChangeAlignPar();
    updatePargValue(valueParg.id, value);

    setText(value);
  };
  const handleChangeHeading = (value) => {
    handleChangeAlignHeading();
    updateHeadingValue(valueHeading.id, value);

    setTextHeading(value);
  };

  return (
    <div className={styles.popup}>
      <PopupHeader
        heading={heading}
        title={title}
        onClick={() => setFormField("")}
        handleSaveClick={() => {
          handleSaveClick(), setLines([...lines, heading]);
        }}
      />
      <ReactQuill
        ref={(el) => (quillRef.current = el)}
        // ref={quillRef}
        formats={formats}
        modules={modules}
        value={title === "Edit Heading" ? textHeading : text}
        onChange={title === "Edit Heading" ? handleChangeHeading : handleChange}
      />
    </div>
  );
};
