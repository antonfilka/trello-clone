import React from "react";
import { logItem } from "../../../types/types";
import { author, date, logItemWrap, message } from "./LogItem.css";
import { BsFillPersonFill } from "react-icons/bs";

interface LogItemProps {
  logItem: logItem;
}

const LogItem: React.FC<LogItemProps> = ({ logItem }) => {
  let timeOffset = new Date(Date.now() - Number(logItem.logTimestamp));
  const showOffsetTime = `${
    timeOffset.getMinutes() > 0 ? `${timeOffset.getMinutes()}m` : ""
  } ${timeOffset.getSeconds() > 0 ? `${timeOffset.getSeconds()}s ago` : ""} ${
    timeOffset.getSeconds() === 0 ? `just now` : ""
  }`;

  return (
    <div className={logItemWrap}>
      <div className={author}>
        <BsFillPersonFill />
        {logItem.logAuthor}
      </div>
      <div className={message}>{logItem.logMessage}</div>

      <div className={date}>{showOffsetTime}</div>
    </div>
  );
};

export default LogItem;
