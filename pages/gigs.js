import {
  MagicContext,
  LoggedInContext,
  LoadingContext,
} from "../components/Store";

import { useContext, useState, useEffect } from "react";
import { BigNumber, ethers } from "ethers";

import { router, useRouter } from "next/router";

import ditoContractAbi from "../utils/ditoTokenContractAbi.json";

function Gigs() {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [magic] = useContext(MagicContext);

  const [openGigs, setOpenGigs] = useState([]);

  useEffect(() => {
    setOpenGigs([
      {
        title: "gig1",
        offeredDitos: 24,
        description: "lorem ipsum blabla",
        neededSkills: ["a", "b", "c"],
      },
    ]);
  }, []);

  return (
    <div className="w-full h-screen p-8">
      <h1>Open Gigs</h1>
      <div className="grid grid-cols-3 gap-8">
        {openGigs.map((gig, i) => {
          return (
            <div
              key={i}
              className="border-2 border-blue-600 flex flex-col shadow"
            >
              <div className="flex justify-between border-b-2 border-gray-400 p-2">
                <p>{gig.title}</p>
                <p>DiTo offered: {gig.offeredDitos}</p>
              </div>
              <p className="p-2">{gig.description}</p>
              <div className="flex border-t-2 border-gray-400 p-2">
                <p>Skills needed: </p>
                {gig.neededSkills.map((skill, j) => (
                  <span>{`#${skill}`}</span>
                ))}
              </div>
              <button type="button" className="bg-red-600 text-white w-full">
                Take this gig!
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-8">
        <button type="button" className="p-4 border-2 border-blue-600">
          Create new gig
        </button>
        <div className="flex flex-col p-4 border-2 border-blue-600">
          <h2>Your skills</h2>
        </div>
      </div>
    </div>
  );
}

export default Gigs;
