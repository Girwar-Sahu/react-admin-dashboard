import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { Lock } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";
function Security() {
  const [security, setSecurity] = useState(false);
  return (
    <SettingSection icon={Lock} title="Security">
      <ToggleSwitch
        label="Two-Factor Authentication"
        isOn={security}
        onToggle={() => {
          setSecurity(!security);
        }}
      />
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold mt-4 py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Change Password
      </button>
    </SettingSection>
  );
}

export default Security;
