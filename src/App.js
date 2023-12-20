import React, { useState } from 'react'
import Select from 'react-select'

export default function App() {
  const [value,setValue] = useState(null)
  const options = [
    {value: "c++", label: "C++"},
    {value: "javascript", label: "JavaScript"},
    {value: "java", label: "Java"},
    {value: "phyton", label: "Phyton"},
    {value: "c#", label: "C#"},
  ]
  return (
    <div style={{margin: 500, width: 500}}>
      <Select 
        options={options} 
        defaultValue={value} 
        placeholder={"Search..."} 
        onChange={setValue}
        isMulti
        isSearchable
        noOptionsMessage={() => "No seacrh found"}

        styles={{
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: 'gray',
          }),
          clearIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "red",
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "black",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: "brown"
          }),
          multiValueRemove: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isFocused ? "red": "black",
            backgroundColor: state.isFocused ? "black" : "lightgreen",
          })
        }}
        />
    </div>
  )
}
