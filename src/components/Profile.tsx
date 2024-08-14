import React from "react";

type ProfileProps = {
    name: string;
    picture?: string | null;
    link?: string | null;
  }

const Profile: React.FC<ProfileProps> = ( { name, picture, link }) => {
    let image = '../judges/avatar-default.svg';

    if (picture) {
        image = picture;
    }

    return link? (
        <a 
            href={link? link : "#"}
            target="_blank"
            className="relative flex flex-col w-60 items-center cursor-pointer rounded-md transition duration-300 transform hover:bg-gray-700 hover:bg-opacity-30 p-3 lg:p-5">
            <div className="absolute inset-0 profile-square-mask rounded-md p-2 lg:p-3">
                <img
                    src={image}
                    alt="Example"
                    className="rounded-md masked-image"
                />
            </div>
            <span className="font-poppins text-center text-xl lg:text-3xl p-1 lg:p-2">{name}</span>
        </a>
    ) : (
        <div className="relative flex flex-col w-60 items-center rounded-md transition duration-300 transform hover:bg-gray-700 hover:bg-opacity-30 p-3 lg:p-5">
            <div className="absolute inset-0 profile-square-mask rounded-md p-2 lg:p-3">
                <img
                    src={image}
                    alt="Example"
                    className="rounded-md masked-image"
                />
            </div>
            <span className="font-poppins text-center text-xl lg:text-3xl p-1 lg:p-2">{name}</span>
        </div>
    )
}

export default Profile;