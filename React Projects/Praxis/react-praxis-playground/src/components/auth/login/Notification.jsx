import { useEffect } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

const Notification = ({ isSent, setIsSent, errMsg, toggleShow }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsSent(false);
    }, 5000);
  });

  return (
    <>
      <div className={isSent ? "notification" : "hide"}>
        {isSent ? (
          <p className="notification__message">
            Please log in with your newly created credentials
            <CloseCircleOutlined className="notification__button" onClick={() => toggleShow()} />
          </p>
        ) : (
          ""
        )}
      </div>
      <div className={errMsg.length > 5 ? "notification" : "hide"}>
        {errMsg ? (
          <p className="notification__message">
            {errMsg}
            <CloseCircleOutlined className="notification__button" onClick={() => toggleShow()} />
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Notification;
