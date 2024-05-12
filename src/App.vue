<script setup>
const basicRomanNumeral =
  ['',
    'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', '',
    'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '',
    'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '',
    'M', 'MM', 'MMM'
  ];

function convertToRoman(num) {
  const numArray = num.toString().split('');
  const base = numArray.length;
  let count = base - 1;
  const convertedRoman = numArray.reduce((roman, digit) => {
    const digitRoman = basicRomanNumeral[+digit + count * 10];
    const result = roman + digitRoman;
    count -= 1;
    return result;
  }, '');
  return convertedRoman;
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen text-xl font-semibold text-white rounded-b-[100px] bg-stone-800  min-w-screen">
    <img
      src="https://readme-typing-svg.demolab.com?font=Jetbrains+Mono&weight=600&size=54&duration=4000&pause=1000&color=06b6d4&center=true&vCenter=true&random=false&width=1000&height=100&lines=%2F%2F+muhammadoka.dev;%2F.*%5C.(go%7Cpy%7Crs)%24%2F"
      alt="Typing SVG" />
    <p>telling computers what to do since 2012</p>
    <p class="text-base">tags: cybersecurity, devops, backend</p>
  </div>
  <div class="flex flex-col justify-center min-h-screen gap-4 p-32 text-xl font-semibold text-white min-w-screen"
    id="about">
    <p class="text-5xl text-cyan-500">#about</p>
    <p>
      hello 👋! my name is muhammad <span class="text-cyan-500">oka</span>. currently a computer science sophomore @
      <a href="https://cs.ui.ac.id/" target="_blank" rel="noreferrer" class="text-cyan-500">Universitas Indonesia</a>.
      my journey into computer science began in first grade elementary when i joined the school's robotics club,
      igniting a lifelong curiosity for technology.<br /><br />

      outside of academic obligations, i do side-projects as a playground to solidify my understanding in computer
      science and explore new technologies. some topics i am currently interested are
      <span class="text-cyan-500">cybersecurity</span>,
      <span class="text-cyan-500">devops</span>,
      <span class="text-cyan-500">computer networks</span>,
      <span class="text-cyan-500">programming languages</span>, and
      <span class="text-cyan-500">backend engineering</span>.
      i also like to participate in capture-the-flag competitions from time to time to
      apply my cybersecurity skills.<br /><br />

      beyond computer science, i am a car-guy and also enjoy motorcycles. music is also one of my longest hobbies,
      listening to broad ranges of genres from jazz-fusion to metal, and playing the piano for fun.<br /><br />

      currently serving as a lead @
      <a href="https://ristek.cs.ui.ac.id/" target="_blank" rel="noreferrer" class="text-cyan-500">RISTEK</a> and
      capture-the-flag vice person-in-charge @
      <a href="https://compfest.id/" target="_blank" rel="noreferrer" class="text-cyan-500">COMPFEST</a>.
    </p>
  </div>
  <div
    class="flex flex-col gap-4 justify-center min-h-screen p-32 text-xl font-semibold text-white rounded-[100px] bg-stone-800 min-w-screen"
    id="projects">
    <p class="text-5xl text-cyan-500">#projects</p>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <p>└──</p>
        <v-icon name="co-go" scale="2" />
        <p>scele_gcal</p>
      </div>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;└── README.md -> Fetch SCeLe assignments and adds them to your Google Tasks.</p>
      <a href="https://github.com/kawijayaa/scele_gcal" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        github ->
        <span class="text-cyan-500">https://github.com/kawijayaa/scele_gcal</span></a>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-3 items-center">
        <p>└──</p>
        <v-icon name="fa-rust" scale="1.5" />
        <p>bfi</p>
      </div>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;└── README.md -> Brainf*ck interpreter built with Rust.</p>
      <a href="https://github.com/kawijayaa/bfi" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└── github ->
        <span class="text-cyan-500">https://github.com/kawijayaa/bfi</span></a>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <p>└──</p>
        <v-icon name="co-go" scale="2" />
        <p>goturing</p>
      </div>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;└── README.md -> A turing machine implemented using Go.</p>
      <a href="https://github.com/kawijayaa/goturing" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        github ->
        <span class="text-cyan-500">https://github.com/kawijayaa/goturing</span></a>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-3 items-center">
        <p>└──</p>
        <v-icon name="fa-python" scale="1.5" />
        <p>CekAsdosan</p>
      </div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;└── README.md -> Monitor the SiAsisten website for new
        teaching assistant vacancies.
      </p>
      <a href="https://github.com/kawijayaa/CekAsdosan" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        github ->
        <span class="text-cyan-500">https://github.com/kawijayaa/CekAsdosan</span></a>
    </div>
  </div>
  <div class="flex flex-col justify-center min-h-screen gap-4 p-32 text-xl font-semibold text-white min-w-screen"
    id="uses">
    <p class="text-5xl text-cyan-500">#uses</p>
    <div class="flex flex-col gap-2">
      <p>└── hardwares</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;└── laptop -> Asus ROG Zephyrus M16 2022</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;└── keyboard -> VortexSeries GT-65</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;└── mouse -> Rexus Daxa Air IV</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;└── headphones -> Sennheiser HD 560S</p>
    </div>
    <div class="flex flex-col gap-2">
      <p>└── personal development environment</p>
      <a href="https://github.com/kawijayaa/dotfiles" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        .config -> <span class="text-cyan-500">https://github.com/kawijayaa/dotfiles</span></a>
      <a href="https://github.com/neovim/neovim" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        neovim -> <span class="text-cyan-500">https://github.com/neovim/neovim</span></a>
      <a href="https://github.com/alacritty/alacritty" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        alacritty -> <span class="text-cyan-500">https://github.com/alacritty/alacritty</span></a>
      <a href="https://github.com/tmux/tmux" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        tmux -> <span class="text-cyan-500">https://github.com/tmux/tmux</span></a>
      <a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        oh-my-zsh -> <span class="text-cyan-500">https://github.com/ohmyzsh/ohmyzsh</span></a>
      <a href="https://www.docker.com" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        docker -> <span class="text-cyan-500">https://www.docker.com</span></a>
    </div>
    <div class="flex flex-col gap-2">
      <p>└── miscellaneous softwares</p>
      <a href="https://www.foobar2000.org/" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        foobar2000 -> <span class="text-cyan-500">https://www.foobar2000.org/</span></a>
      <a href="https://www.microsoft.com/edge" target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;&nbsp;└──
        microsoft edge -> <span class="text-cyan-500">https://www.microsoft.com/edge</span></a>
    </div>
  </div>
  <div
    class="flex flex-col gap-4 justify-center p-32 text-xl font-semibold text-white rounded-t-[100px] bg-stone-800 min-w-screen"
    id="socials">
    <p class="text-5xl text-cyan-500">#socials</p>
    <div class="flex flex-col gap-2">
      <p>└── email -> oka@muhammadoka.dev</p>
      <a href="https://www.linkedin.com/in/kawijayaa" target="_blank" rel="noreferrer">└──
        linkedin -> <span class="text-cyan-500">https://www.linkedin.com/in/kawijayaa</span></a>
      <a href="https://github.com/kawijayaa" target="_blank" rel="noreferrer">└──
        github -> <span class="text-cyan-500">https://github.com/kawijayaa</span></a>
      <a href="https://instagram.com/kawijayaa" target="_blank" rel="noreferrer">└──
        instagram -> <span class="text-cyan-500">https://instagram.com/kawijayaa</span></a>
      <a href="https://ctftime.org/user/147526" target="_blank" rel="noreferrer">└──
        ctftime -> <span class="text-cyan-500">https://ctftime.org/user/147526</span></a>
      <a href="https://www.last.fm/user/okeeeeng" target="_blank" rel="noreferrer">└──
        last.fm -> <span class="text-cyan-500">https://www.last.fm/user/okeeeeng</span></a>
    </div>
  </div>
  <div class="flex items-center justify-around p-8 pt-32 text-xl font-semibold text-white bg-stone-800 min-w-screen">
    <p>muhammad<span class="text-cyan-500">oka</span>.dev</p>
    <p>{{ convertToRoman(new Date().getFullYear()) }}</p>
  </div>
</template>
