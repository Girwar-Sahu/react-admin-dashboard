import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle } from "lucide-react";
import { Plus } from "lucide-react";

function ConnectedAccounts() {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "/google.png",
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: "/facebook.svg",
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: "/x.png",
    },
  ]);
  return (
    <SettingSection icon={HelpCircle} title="Connected Accounts">
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center py-3 justify-between"
        >
          <div className="flex gap-1">
            <span>
              <img
                src={account.icon}
                className="size-6 object-cover rounded-full mr-2"
                alt="social image"
              />
            </span>
            <span className="dark:text-gray-300 text-gray-500">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded text-white ${
              account.connected
                ? "bg-green-500 dark:bg-green-600 hover:bg-green-700"
                : "bg-gray-500 dark:bg-gray-600 hover:bg-gray-700"
            } transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) =>
                  acc.id === account.id
                    ? { ...acc, connected: !acc.connected }
                    : acc
                )
              );
            }}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
      <button className="mt-4 flex gap-1 items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <Plus size={18} className="mr-2" />
        <span>Add Account</span>
      </button>
    </SettingSection>
  );
}

export default ConnectedAccounts;
