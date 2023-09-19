import { TbBrandNextjs } from "react-icons/tb"

export default function Page() {
  return (
    <main className="flex p-24 items-center min-h-screen bg-gradient-to-b from-emerald-400 from-10% to-sky-500 text-white">
      <div className="flex flex-col bg-neutral-900 px-16 py-12 gap-8 rounded-xl text-white z-10">
        <h1 className="text-7xl font-bold"><span className="text-transparent outline-custom">/</span>uses</h1>
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl">Project 1</h1>
              <TbBrandNextjs className="text-3xl" />
            </div>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa lorem, pharetra eu consectetur quis, ultrices vel elit. Nulla tempus tincidunt nisi, in accumsan arcu rutrum sit amet. Nunc a est nunc. Duis sagittis condimentum lectus a luctus. Aenean congue sem rhoncus aliquam tempor. Cras a justo porttitor, vehicula odio sed, maximus sapien.</p>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl">Project 1</h1>
              <TbBrandNextjs className="text-3xl" />
            </div>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa lorem, pharetra eu consectetur quis, ultrices vel elit. Nulla tempus tincidunt nisi, in accumsan arcu rutrum sit amet. Nunc a est nunc. Duis sagittis condimentum lectus a luctus. Aenean congue sem rhoncus aliquam tempor. Cras a justo porttitor, vehicula odio sed, maximus sapien.</p>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl">Project 1</h1>
              <TbBrandNextjs className="text-3xl" />
            </div>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa lorem, pharetra eu consectetur quis, ultrices vel elit. Nulla tempus tincidunt nisi, in accumsan arcu rutrum sit amet. Nunc a est nunc. Duis sagittis condimentum lectus a luctus. Aenean congue sem rhoncus aliquam tempor. Cras a justo porttitor, vehicula odio sed, maximus sapien.</p>
          </div>
        </div>
        <a href="/#what-i-do" className="text-4xl text-transparent [-webkit-text-stroke:_0.75px_white;]">../</a>
      </div>
    </main>
  )
}