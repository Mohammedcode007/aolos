import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import { SketchPicker } from "react-color";
import "./styles.css";
const TableUser = ({ data, setData, newCol1, setNewCol1 }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [selectedColorField, setSelectedColorField] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [total, setTotal] = useState(0);
  const handleInputChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;

    if (field === 'col2') {
      // Calculate the new total
      const numbers = newData.map(row => Number(row.col2));
      const newTotal = numbers.reduce((acc, num) => acc + num, 0);

      // Check if the new total exceeds 100
      if (newTotal > 100) {
        alert('The total of probabilities cannot exceed 100.');
        return; // Do not update the state if the total exceeds 100
      }

      setTotal(newTotal);
    }

    setData(newData);
  };

  // const handleInputChange = (index, field, value) => {
  //   console.log(index,'index');
  //   console.log(field,'field');
  //   console.log(value,'value');
  //   const newData = [...data];
  //   if (field === 'col2'){
  //     const num = newData.map((i)=>i.col2)
  //     const numbers = num.map(str => Number(str));
  //     const total = numbers.reduce((acc, num) => acc + num, 0);

  //     console.log(num,'num');
  //   }

  //   newData[index][field] = value;
  //   setData(newData);
  // };

  const handleChangeColor = (color) => {
    if (selectedIndex !== null && selectedColorField) {
      handleInputChange(selectedIndex, selectedColorField, color.hex);
    }
  };

  const handleColorPickerClick = (index, field) => {
    setSelectedIndex(index);
    setSelectedColorField(field);
    setDisplayColorPicker(!displayColorPicker);
  };

  return (
    <div>
      <Table striped bordered hover size="sm" className="table-sm text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Probability</th>
            <th>Coupon code</th>
            <th>Win/No Win</th>
            <th>Wheel Color</th>
            <th>Text Color</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.col1}</td>
              <td>
                <input
                  type="number"
                  value={row.col2}
                  onChange={(e) =>
                    handleInputChange(index, "col2", e.target.value)
                  }
                  className="form-control form-control-sm"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.col3}
                  onChange={(e) =>
                    handleInputChange(index, "col3", e.target.value)
                  }
                  className="form-control form-control-sm"
                />
              </td>
              <td className="td73px">
                <select
                  value={row.col4}
                  onChange={(e) =>
                    handleInputChange(index, "col4", e.target.value)
                  }
                  className="form-control form-control-sm"
                >
                  <option value="Win">Win</option>
                  <option value="No Win">No Win</option>
                </select>
              </td>
              <td className="td50px">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    onClick={() => handleColorPickerClick(index, "wheelColor")}
                    style={{
                      backgroundColor: row.wheelColor,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  />
                  {displayColorPicker &&
                    selectedIndex === index &&
                    selectedColorField === "wheelColor" && (
                      <div
                        style={{
                          position: "absolute",
                          zIndex: "2",
                          top: "50%",
                          right: "0px",
                          bottom: "0px",
                          left: "50px",
                        }}
                      >
                        <div
                          style={{
                            position: "fixed",
                            top: "0px",
                            right: "0px",
                            bottom: "0px",
                            left: "0px",
                          }}
                          onClick={() => setDisplayColorPicker(false)}
                        />
                        <SketchPicker
                          color={row.wheelColor}
                          onChange={handleChangeColor}
                        />
                      </div>
                    )}
                </div>
              </td>
              <td className="td50px">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    onClick={() => handleColorPickerClick(index, "textColor")}
                    style={{
                      backgroundColor: row.textColor,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  />
                  {displayColorPicker &&
                    selectedIndex === index &&
                    selectedColorField === "textColor" && (
                      <div
                        style={{
                          position: "absolute",
                          zIndex: "2",
                          top: "50%",
                          right: "0px",
                          bottom: "0px",
                          left: "50px",
                        }}
                      >
                        <div
                          style={{
                            position: "fixed",
                            top: "0px",
                            right: "0px",
                            bottom: "0px",
                            left: "0px",
                          }}
                          onClick={() => setDisplayColorPicker(false)}
                        />
                        <SketchPicker
                          color={row.textColor}
                          onChange={handleChangeColor}
                        />
                      </div>
                    )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableUser;
