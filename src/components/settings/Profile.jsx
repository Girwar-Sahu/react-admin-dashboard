import React from "react";
import SettingSection from "./SettingSection";
import { User } from "lucide-react";

function Profile() {
  return (
    <SettingSection icon={User} title="Profile">
      <div className="flex flex-col sm:flex-row items-center mb-6 gap-1">
        <img
          src="https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?semt=ais_hybrid"
          alt="User image"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold dark:text-gray-100  text-gray-900">John Doe</h3>
          <p className="text-gray-400">johndoe@example.com</p>
        </div>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Update Profile
      </button>
    </SettingSection>
  );
}

export default Profile;
