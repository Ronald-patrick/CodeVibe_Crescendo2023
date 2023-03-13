import React, { useState, Component } from "react";
import Select from "react-select";
import axios from "axios";

const SymptomsList = [
  { value: 1, label: "Abdomen acute" },
  { value: 2, label: "Abdominal bloating" },
  { value: 3, label: "Abdominal tenderness" },
  { value: 4, label: "Abnormal sensation" },
  { value: 5, label: "Abnormally hard consistency" },
  { value: 6, label: "Abscess bacterial" },
  { value: 7, label: "Absences finding" },
  { value: 8, label: "Achalasia" },
  { value: 9, label: "Ache" },
  { value: 10, label: "Adverse effect" },
  { value: 11, label: "Adverse reaction" },
  { value: 12, label: "Agitation" },
  { value: 13, label: "Air fluid level" },
  { value: 14, label: "Alcohol binge episode" },
  { value: 15, label: "Alcoholic withdrawal symptoms" },
  { value: 16, label: "Ambidexterity" },
  { value: 17, label: "Angina pectoris" },
  { value: 18, label: "Anorexia" },
  { value: 19, label: "Anosmia" },
  { value: 20, label: "Aphagia" },
  { value: 21, label: "Apyrexial" },
  { value: 22, label: "Arthralgia" },
  { value: 23, label: "Ascites" },
  { value: 24, label: "Asterixis" },
  { value: 25, label: "Asthenia" },
  { value: 26, label: "Asymptomatic" },
  { value: 27, label: "Ataxia" },
  { value: 28, label: "Atypia" },
  { value: 29, label: "Aura" },
  { value: 30, label: "Awakening early" },
  { value: 31, label: "Barking cough" },
  { value: 32, label: "Bedridden" },
  { value: 33, label: "Behavior hyperactive" },
  { value: 34, label: "Behavior showing increased motor activity" },
  { value: 35, label: "Blackout" },
  { value: 36, label: "Blanch" },
  { value: 37, label: "Bleeding of vagina" },
  { value: 38, label: "Bowel sounds decreased" },
  { value: 39, label: "Bradycardia" },
  { value: 40, label: "Bradykinesia" },
];

// const len  = SymptomsList.length
// for (let i = 1; i <= len; i++) {
//   SymptomsList = SymptomsList.map(x => x.value ===  i);
// }

function Symptoms() {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [results, setResults] = useState([]);
  const sendSymp = async () => {
    // const headers = {
    //   Authorization: "Bearer my-token",
    //   "My-Custom-Header": "foobar",
    // };
    // axios
    //   .post("http://localhost:8000/api", setHandle, { headers })
    //   .then((response) => this.setState({ articleId: response.data }));

    console.log(selectedOptions);
    const res = await axios.post("http://localhost:8000/api",{
      "symptoms" : selectedOptions
    });

    setResults(res.data)
  };
  const setHandle = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map((symp) => symp.label) : []);
  };

  return (
    <div className='mx-auto text-center container py-8'>
      <h3 className='text-2xl font-bold pb-4 border-b-[1px]  border-gray-300'>
        Select Symptoms
      </h3>
      <div className='flex m-10 flex-wrap border-[1px] justify-center  border-gray-300  items-center'>
        <div className=' px-2'>
          <Select options={SymptomsList} onChange={setHandle} isMulti />
        </div>
        <div>{selectedOptions}</div>
      </div>
      <button
        onClick={sendSymp}
        className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
      >
        Save
      </button>

      <div>
          <ul className="mt-4">
              {Object.keys(results).map((keyName, i) => (
                <li>{keyName} : {results[keyName] * 100 }%</li>
              ))}
          </ul>
      </div>
    </div>
  );
}

export default Symptoms;
