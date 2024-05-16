import React from "react";
import { Table } from "react-bootstrap";

const Test = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Column 0</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, index) => (
            <tr key={index}>
              <td>Row {index + 1}, Column 1</td>
              <td>
                <input
                  type="number"
                  placeholder={`Row ${index + 1}, Column 2`}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder={`Row ${index + 1}, Column 3`}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder={`Row ${index + 1}, Column 4`}
                />
              </td>
              <td>COLOR</td>
              <td>COLOR</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Test;
