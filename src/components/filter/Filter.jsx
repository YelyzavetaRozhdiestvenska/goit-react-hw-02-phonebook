import React from 'react';

export const Filter = ({ filter, getContact }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input value={filter}
        onChange={getContact}
        placeholder="Search..."
        type="text"
        name="filter"></input>
    </>
  );
};
