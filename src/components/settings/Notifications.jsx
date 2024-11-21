import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

function Notifications() {
  const [notification, setNotification] = useState({
    push: true,
    email: false,
    sms: true,
  });
  const handleNotificationToggle = (label) => {
    setNotification((prevNotification) => ({
      ...prevNotification,
      [label]: !prevNotification[label],
    }));
  };
  return (
    <SettingSection icon={Bell} title="Notifications">
      <ToggleSwitch
        label="Push Notification"
        isOn={notification.push}
        onToggle={() => handleNotificationToggle("push")}
      />
      <ToggleSwitch
        label="Email Notification"
        isOn={notification.email}
        onToggle={() => handleNotificationToggle("email")}
      />
      <ToggleSwitch
        label="SMS Notification"
        isOn={notification.sms}
        onToggle={() => handleNotificationToggle("sms")}
      />
    </SettingSection>
  );
}

export default Notifications;
