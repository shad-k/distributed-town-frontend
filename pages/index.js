import SkillPill from "../components/SkillPill";
import Quote from "../components/Quote";
import RegistrationModal from "../components/registration/RegistrationModal";
import Link from "next/link";

import { useContext, useEffect, useState } from "react";
import Store, {
  MagicContext,
  LoggedInContext,
  LoadingContext,
  TokenContext,
  UserInfoContext
} from "../components/Store";
import { useRouter } from "next/router";
import TheNav from "../components/TheNav";
import bgImages from "../utils/bgImages.js";
import { get, set } from "mongoose";

import communityContractAbi from "../utils/communityContractAbi.json";

import { ethers } from "ethers";

const Index = props => {
  return (
    <div className="h-screen w-full flex">
      <TheNav
        logoUrl="/dito-logo.svg"
        helpCta="What is it about?"
        helpUrl="#"
        className="fixed top-0 left-0"
      />
      <div className="h-full w-1/2 bg-denim flex justify-center items-center">
        <div className="p-8 bg-white flex justify-center items-center w-2/3 m-auto border border-black">
          <p className="text-center">
            <strong>Distributed Town</strong> is a new financial infrastructure
            for public goods, designed for the real world.
            <br />
            <br />
            It’s built upon mutual, collaborative economics between individuals
            and communities - and a universal identity management based on
            skills, rather than personal data.
          </p>
        </div>
      </div>
      <div className="h-full w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl m-12 font-bold">
          This is <span className="underline">your Community</span>
        </h1>

        <div className="pt-8 pb-4 px-2 border-2 border-denim flex flex-col space-y-4 w-3/5">
          <div className="border-2 border-red p-1">
            <div className="border-2 border-denim p-4 text-center font-bold">
              <Link href="/create">
                <a>Create</a>
              </Link>
            </div>
          </div>
          <div className="border-2 border-red p-1">
            <div className="border-2 border-denim p-4 text-center font-bold">
              <Link href="/join">
                <a>Join</a>
              </Link>
            </div>
          </div>
          <div className="border-2 border-red p-1">
            <div className="border-2 border-denim p-4 flex justify-between items-center font-bold">
              Login{" "}
              <input
                className="border border-denim p-1 w-3/4"
                placeholder="yourmail@me.io"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let skills = await fetch(`${process.env.API_URL}/api/skill`, {
    method: "GET"
  });
  skills = await skills.json();

  return {
    props: { skills } // will be passed to the page component as props
  };
}

export default Index;
