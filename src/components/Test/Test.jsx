import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SketchPicker } from 'react-color';



const Test = () => {
  const initialData = [
    "Data 1-1",
    "Data 2-1",
    "Data 3-1",
    "Data 4-1",
    "Data 5-1",
    "Data 6-1"
  ];
  
  const createInitialDataRow = (item) => ({
    col1: item,
    col2: 0,
    col3: 0,
    col4: "No Win",
    wheelColor: "#FFFFFF",
    textColor: "#000000"
  });
  
  const initialDataRows = initialData.map(createInitialDataRow);
  const [data, setData] = useState(initialDataRows);
  const [newCol1, setNewCol1] = useState('');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [selectedColorField, setSelectedColorField] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleInputChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const handleAddRow = () => {
    const newRow = {
      col1: newCol1,
      col2: 0,
      col3: 0,
      col4: "No Win",
      wheelColor: "#FFFFFF",
      textColor: "#000000"
    };
    setData([...data, newRow]);
    setNewCol1('');
  };

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
      <Form className="mb-3 d-flex">
        <Form.Group className="mr-2">
          <Form.Label className="mr-2">Col 1</Form.Label>
          <Form.Control
            type="text"
            value={newCol1}
            onChange={(e) => setNewCol1(e.target.value)}
          />
        </Form.Group>
        <Button className="ml-2" onClick={handleAddRow}>Add Row</Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
            <th>Col 4</th>
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
                  onChange={(e) => handleInputChange(index, 'col2', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.col3}
                  onChange={(e) => handleInputChange(index, 'col3', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={row.col4}
                  onChange={(e) => handleInputChange(index, 'col4', e.target.value)}
                >
                  <option value="Win">Win</option>
                  <option value="No Win">No Win</option>
                </select>
              </td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    onClick={() => handleColorPickerClick(index, 'wheelColor')}
                    style={{
                      backgroundColor: row.wheelColor,
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      cursor: 'pointer'
                    }}
                  />
                  {displayColorPicker && selectedIndex === index && selectedColorField === 'wheelColor' && (
                    <div style={{ position: 'absolute', zIndex: '2' }}>
                      <div
                        style={{
                          position: 'fixed',
                          top: '0px',
                          right: '0px',
                          bottom: '0px',
                          left: '0px'
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
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    onClick={() => handleColorPickerClick(index, 'textColor')}
                    style={{
                      backgroundColor: row.textColor,
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      cursor: 'pointer'
                    }}
                  />
                  {displayColorPicker && selectedIndex === index && selectedColorField === 'textColor' && (
                    <div style={{ position: 'absolute', zIndex: '2' }}>
                      <div
                        style={{
                          position: 'fixed',
                          top: '0px',
                          right: '0px',
                          bottom: '0px',
                          left: '0px'
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

export default Test;
