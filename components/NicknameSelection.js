import React from "react";
import PropTypes from "prop-types";

const NicknameSelection = ({
  setUserInfo,
  userInfo,
  value = "",
  title = "",
  subtitle = "",
  placeholderText = ""
}) => (
  <div className="max-w-sm">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{subtitle}</p>
    </div>
    <div className="flex items-center">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="nickname"
        type="text"
        value={value}
        placeholder={placeholderText}
        onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
        required
      ></input>
    </div>
  </div>
);
export default NicknameSelection;
