import { IoLaptopOutline, IoPhonePortraitOutline, IoTabletLandscapeOutline } from "react-icons/io5";
import { FaRegKeyboard, FaComputerMouse, FaHeadphones } from "react-icons/fa6";

export default function HardwaresPage() {
  return (
    <div className='flex flex-col justify-center gap-4'>
      <div className='flex items-center gap-4'>
        <IoLaptopOutline className='w-12 h-12' />
        <div className='text-lg'>ASUS ROG Zephyrus M16 (2022)</div>
      </div>
      <div className='flex items-center gap-4'>
        <IoPhonePortraitOutline className='w-12 h-12' />
        <div className='text-lg'>Samsung A54</div>
      </div>
      <div className='flex items-center gap-4'>
        <IoTabletLandscapeOutline className='w-12 h-12' />
        <div className='text-lg'>Samsung Galaxy Tab S8</div>
      </div>
      <div className='flex items-center gap-4'>
        <FaRegKeyboard className='w-12 h-12' />
        <div className='text-lg'>VortexSeries GT-65 Black</div>
      </div>
      <div className='flex items-center gap-4'>
        <FaComputerMouse className='w-12 h-12' />
        <div className='text-lg'>Rexus Daxa Air IV Black</div>
      </div>
      <div className='flex items-center gap-4'>
        <FaHeadphones className='w-12 h-12' />
        <div className='text-lg'>Sennheiser HD 560S</div>
      </div>
    </div>
  );
}
