// pages/Profile.jsx

import React from "react";
import useProfile from "../hooks/useProfile";
import { MapPinIcon, UsersIcon } from "lucide-react";
import { capitialize } from "../lib/utils";
import { getLanguageFlag } from "../components/FriendCard";

const Profile = () => {
  const { profile, isLoading, error } = useProfile();

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20">Error loading profile</div>;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-4xl space-y-8">

        {/* Profile Card */}
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="/user.png"
                    alt="profile"
                  />
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold">{profile.fullName}</h2>
                <p className="opacity-70">{profile.email}</p>

                {profile.location && (
                  <div className="flex items-center justify-center sm:justify-start text-sm opacity-70 mt-1">
                    <MapPinIcon className="size-4 mr-1" />
                    {profile.location}
                  </div>
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="mt-4">
              <h3 className="font-semibold mb-1">Bio</h3>
              <p className="opacity-70 text-sm">
                {profile.bio || "No bio added"}
              </p>
            </div>

            {/* Languages */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge badge-secondary">
                {getLanguageFlag(profile.nativeLanguage)}
                Native: {capitialize(profile.nativeLanguage)}
              </span>

              <span className="badge badge-outline">
                {getLanguageFlag(profile.learningLanguage)}
                Learning: {capitialize(profile.learningLanguage)}
              </span>
            </div>

          </div>
        </div>

        {/* Friends Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <UsersIcon className="size-5" />
            <h2 className="text-xl font-bold">
              Friends ({profile.friends?.length || 0})
            </h2>
          </div>

          {profile.friends?.length === 0 ? (
            <div className="card bg-base-200 p-6 text-center">
              <p className="opacity-70">No friends yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {profile.friends.map((friend) => (
                <div
                  key={friend._id}
                  className="card bg-base-200 hover:shadow-lg transition"
                >
                  <div className="card-body flex items-center gap-3 p-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src="/user.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm">
                        {friend.fullName}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;