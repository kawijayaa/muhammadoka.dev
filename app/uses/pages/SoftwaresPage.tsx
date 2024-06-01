import { SiNeovim, SiArc, SiAlacritty, SiTmux } from 'react-icons/si';
import { GrConfigure } from 'react-icons/gr';

export default function SoftwaresPage() {
  return (
    <div className='flex flex-col justify-center gap-4'>
      <a href='https://neovim.io/' target='_blank' rel='noreferrer' className='flex items-center gap-4 hover:underline hover:text-cyan-500 cursor-pointer'>
        <SiNeovim className='w-12 h-12 text-white' />
        <div className='text-2xl'>Neovim</div>
      </a>
      <a href='https://alacritty.org/' target='_blank' rel='noreferrer' className='flex items-center gap-4 hover:underline hover:text-cyan-500 cursor-pointer'>
        <SiAlacritty className='w-12 h-12 text-white' />
        <div className='text-2xl'>Alacritty</div>
      </a>
      <a href='https://github.com/tmux/tmux' target='_blank' rel='noreferrer' className='flex items-center gap-4 hover:underline hover:text-cyan-500 cursor-pointer'>
        <SiTmux className='w-12 h-12 text-white' />
        <div className='text-2xl'>Tmux</div>
      </a>
      <a href='https://github.com/kawijayaa/dotfiles' target='_blank' rel='noreferrer' className='flex items-center gap-4 hover:underline hover:text-cyan-500 cursor-pointer'>
        <GrConfigure className='w-12 h-12 text-white' />
        <div className='text-2xl'>Dotfiles</div>
      </a>
      <a href='https://arc.net/' target='_blank' rel='noreferrer' className='flex items-center gap-4 hover:underline hover:text-cyan-500 cursor-pointer'>
        <SiArc className='w-12 h-12 text-white' />
        <div className='text-2xl'>Arc</div>
      </a>
    </div>
  );
}
