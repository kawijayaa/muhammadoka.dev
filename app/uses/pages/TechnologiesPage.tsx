import { FaPython, FaRust, FaJava, FaDocker, FaGit } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiGooglecloud, SiCaddy, SiPostgresql, SiDjango, SiSpring, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaGolang } from 'react-icons/fa6';

export default function TechnologiesPage() {
  return (
    <div className='flex flex-col justify-center gap-4'>
      <div className='grid grid-cols-4 gap-4'>
        <a href='https://www.python.org/' target='_blank'>
          <FaPython title='Python' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://www.djangoproject.com/' target='_blank'>
          <SiDjango title='Django' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://golang.org/' target='_blank'>
          <FaGolang title='Go' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://www.java.com/' target='_blank'>
          <FaJava title='Java' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://spring.io/' target='_blank'>
          <SiSpring title='Spring' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://www.rust-lang.org/' target='_blank'>
          <FaRust title='Rust' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://www.typescriptlang.org/' target='_blank'>
          <SiTypescript title='TypeScript' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://www.javascript.com/' target='_blank'>
          <SiJavascript title='JavaScript' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://react.dev/' target='_blank'>
          <SiReact title='React' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://nextjs.org/' target='_blank'>
          <SiNextdotjs title='Next.js' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://tailwindcss.com/' target='_blank'>
          <SiTailwindcss title='Tailwind CSS' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://postgresql.org/' target='_blank'>
          <SiPostgresql title='PostgreSQL' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://git-scm.com/' target='_blank'>
          <FaGit title='Git' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://caddyserver.com/' target='_blank'>
          <SiCaddy title='Caddy' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://www.docker.com/' target='_blank'>
          <FaDocker title='Docker' className='text-6xl hover:text-cyan-500' />
        </a>
        <a href='https://cloud.google.com/' target='_blank'>
          <SiGooglecloud title='Google Cloud Platform' className='text-6xl hover:text-cyan-500' />
        </a>
      </div>
    </div>
  );
}
