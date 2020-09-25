import React from 'react';
import {logout} from 'src/services/auth.service';
import LogoLabel from 'src/assets/images/keep-right-label.png';
import LogoDevice from 'src/assets/images/keep-right-device.png';

export interface AppbarProps {}

const Appbar: React.FC<AppbarProps> = () => {
  return (
    <div className="w-screen h-16 border-b bg-white border-gray-100 shadow flex flex-row items-center justify-between px-4 z-10">
      <div className="h-full flex flex-row items-center">
        <img className="h-full py-1 z-10" src={LogoDevice} alt="KeepRightDevice" />
        <img className="-ml-4 h-full py-3 z-0" src={LogoLabel} alt="KeepRightLabel" />
      </div>
      <button className="text-gray-600" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Appbar;
