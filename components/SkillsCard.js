import { Checkbox } from "@material-ui/core";
import { useState } from "react";
import _ from 'lodash'
function SkillsCard({ title, skills }) {

  const [skill, setSkill] = useState(undefined);

  function handleChange(event) {
    if (event.target.checked) {
      setSkill(event.target.value);
    } else {
      setSkill(undefined);
    }
  }

  return (
    <div className="flex flex-col border border-blue-600">
      <h2>{title}</h2>
      <div className="grid grid-cols-2">
        {skills.map((skill, i) => {
          return (
            <div className="flex flex-row items-start" key={skill}>
              <Checkbox value={skill} inputProps={{ 'aria-label': 'Checkbox A' }} onChange={handleChange} />
              <div className="flex flex-col">
                <p>{skill}</p>
                <input type="range" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default SkillsCard;
