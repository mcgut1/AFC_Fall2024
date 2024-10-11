import React from 'react';

function TableComponent({ people }) {
  return (
    <div>
      <table>
        {/* groups header content in an html table */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Hair Color</th>
            <th>Gender</th>
          </tr>
          
        </thead> 
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.hair_color}</td>
              <td>{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
