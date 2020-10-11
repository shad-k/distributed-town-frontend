import {
  MagicContext,
  LoggedInContext,
} from "../components/Store";

import { useContext, useState, useEffect } from "react";
import SkillsCard from "../components/SkillsCard";

function SignupPhaseOne(props) {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [magic] = useContext(MagicContext);
  const [skills, setSkills] = useState([]);
  const [categories, setCategories] = useState([]);



  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   console.log('useEffect');
  //   fetch('http://3.250.29.111:3005/api/skill', { method: 'GET' })
  //     .then(response => response.json())
  //     .then(json => {
  //       const cats = json.map(s => s.subcategory);
  //       const uniqueCats =  [...new Set(cats)];
  //       setCategories([...uniqueCats]);
  //       setSkills([...json]);
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row max-h-full">
        <div className="flex flex-col space-y-8 container mx-auto">
          <h1>Welcome to Distributed Town!</h1>
          <p>
            This will be a “congrats” message + summary / story about
            Distributed Town, the reasons and benefits in joining it etc.
          </p>

          <div>
            <label htmlFor="nickname">nickname</label>
            <input className="border border-green-600" id="nickname" />
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <h1>Tell us about you!</h1>
          <p>Pick your Skills (between 1 and 3) Description of the process</p>
          <SkillsCard
            title={'Blockchain & DLT'}
            skills={['DeFi', 'Architecture', 'Smart Contracts', 'Blockchain Infrastructure']}
          />
           <SkillsCard
            title={'Tech'}
            skills={['Backend', 'Mobile Dev', 'Web Dev', 'Frontend']}
          />
           <SkillsCard
            title={'Protocol'}
            skills={['Network Design', 'Governance & Consensus', 'Game Theory', 'Tokenomics']}
          />
        </div>
      </div>
      <div className="absolute bottom-0 flex justify-center items-center">
        <button type="button">Next: choose your first community!</button>
      </div>
    </div>
  );
}

export default SignupPhaseOne;

