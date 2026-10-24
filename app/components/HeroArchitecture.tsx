const featureWindows = Array.from({ length: 16 }, (_, row) =>
  Array.from({ length: 3 }, (_, column) => ({
    x: 1092 + column * 39,
    y: 263 + row * 38,
    lit: (row * 7 + column * 5) % 6 < 2,
    delay: ((row * 7 + column * 3) % 12) * 0.35,
  })),
).flat();

type WindowGrid = {
  x: number;
  y: number;
  columns: number;
  rows: number;
  stepX: number;
  stepY: number;
  seed: number;
};

function createWindowGrid({ x, y, columns, rows, stepX, stepY, seed }: WindowGrid) {
  return Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, column) => ({
      x: x + column * stepX,
      y: y + row * stepY,
      lit: (row * 7 + column * 5 + seed) % 7 < 2,
      delay: ((row * 5 + column * 3 + seed) % 12) * 0.35,
    })),
  ).flat();
}

const distantLeftWindows = createWindowGrid({
  x: 751, y: 479, columns: 6, rows: 12, stepX: 29, stepY: 32, seed: 1,
});
const distantCenterWindows = createWindowGrid({
  x: 991, y: 355, columns: 6, rows: 15, stepX: 28, stepY: 33, seed: 3,
});
const distantRightWindows = createWindowGrid({
  x: 1209, y: 448, columns: 4, rows: 12, stepX: 27, stepY: 32, seed: 5,
});
const sideWindows = createWindowGrid({
  x: 1270, y: 348, columns: 5, rows: 16, stepX: 27, stepY: 32, seed: 4,
});
const farSideWindows = createWindowGrid({
  x: 1420, y: 497, columns: 4, rows: 12, stepX: 27, stepY: 32, seed: 2,
});

function Windows({ windows }: { windows: typeof featureWindows }) {
  return windows.map(({ x, y, lit, delay }) => (
    <g
      className={lit ? 'hero-window hero-window-lit' : 'hero-window'}
      key={`${x}-${y}`}
    >
      <rect
        x={x}
        y={y}
        width="13"
        height="18"
        rx="1"
        fill={lit ? '#FFD28A' : '#111F30'}
        fillOpacity={lit ? '.96' : '.88'}
        style={lit ? { animationDelay: `${delay}s` } : undefined}
      />
      {lit && (
        <path
          d={`M${x + 2} ${y + 2}h9v2h-9z`}
          fill="#FFF2CF"
          fillOpacity=".85"
        />
      )}
    </g>
  ));
}

export default function HeroArchitecture() {
  return (
    <div className="hero-media hero-architecture" aria-hidden="true">
      <svg
        className="hero-skyline"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="tower-fill" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#33495D" stopOpacity=".98" />
            <stop offset=".48" stopColor="#203347" stopOpacity=".97" />
            <stop offset="1" stopColor="#111C29" stopOpacity=".98" />
          </linearGradient>
          <linearGradient id="tower-fill-feature" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#23394D" />
            <stop offset=".5" stopColor="#344C60" />
            <stop offset="1" stopColor="#1B2C3D" />
          </linearGradient>
          <linearGradient id="tower-fill-side" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#2C4658" />
            <stop offset=".55" stopColor="#1D3446" />
            <stop offset="1" stopColor="#111F2D" />
          </linearGradient>
          <pattern id="tower-windows-small" width="27" height="32" patternUnits="userSpaceOnUse">
            <rect x="7" y="7" width="10" height="15" rx="1" fill="#0B1928" />
          </pattern>
          <linearGradient id="architectural-line" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#A8C0D1" stopOpacity="0" />
            <stop offset=".48" stopColor="#D0B77F" stopOpacity=".82" />
            <stop offset="1" stopColor="#A8C0D1" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="hero-skyline-distant">
          <path d="M740 900V455l105-54 110 54v445H740Z" fill="url(#tower-fill)" stroke="#AEBCC6" strokeOpacity=".34" strokeWidth="1.5" />
          <path d="M740 455l105-54 110 54v445H740Z" fill="url(#tower-windows-small)" opacity=".5" />
          <Windows windows={distantLeftWindows} />
          <path d="M740 455l105-54 110 54M845 401v499" stroke="#C1CCD3" strokeOpacity=".3" strokeWidth="1.2" />
          <path d="M980 900V335l92-61 92 61v565H980Z" fill="url(#tower-fill-feature)" stroke="#B4C0C8" strokeOpacity=".42" strokeWidth="1.5" />
          <path d="M980 335l92-61 92 61v565H980Z" fill="url(#tower-windows-small)" opacity=".42" />
          <Windows windows={distantCenterWindows} />
          <path d="M980 335l92-61 92 61M1072 274v626" stroke="#C1CCD3" strokeOpacity=".34" strokeWidth="1.2" />
          <path d="M1200 900V430l74-42 74 42v470h-148Z" fill="url(#tower-fill-side)" stroke="#AEBCC6" strokeOpacity=".4" strokeWidth="1.5" />
          <path d="M1200 430l74-42 74 42v470h-148Z" fill="url(#tower-windows-small)" opacity=".4" />
          <Windows windows={distantRightWindows} />
          <path d="M1200 430l74-42 74 42M1274 388v512" stroke="#C1CCD3" strokeOpacity=".3" strokeWidth="1.2" />
        </g>

        <g className="hero-skyline-feature">
          <path
            d="M1082 900V248l63-112 64 112v652h-127Z"
            fill="url(#tower-fill-feature)"
            stroke="#C0CBD2"
            strokeOpacity=".58"
            strokeWidth="2"
          />
          {featureWindows.map(({ x, y, lit, delay }) => (
            <g
              className={lit ? 'hero-window hero-window-lit' : 'hero-window'}
              key={`${x}-${y}`}
            >
              <rect
                x={x}
                y={y}
                width="17"
                height="25"
                rx="1.5"
                fill={lit ? '#FFD28A' : '#111F30'}
                fillOpacity={lit ? '.96' : '.92'}
                style={lit ? { animationDelay: `${delay}s` } : undefined}
              />
              {lit && (
                <rect
                  x={x + 2}
                  y={y + 2}
                  width="13"
                  height="3"
                  rx="1"
                  fill="#FFF2CF"
                  fillOpacity=".85"
                />
              )}
            </g>
          ))}
          <path d="M1145 137v763M1094 272h103M1094 318h103M1094 364h103M1094 410h103M1094 456h103M1094 502h103M1094 548h103M1094 594h103M1094 640h103M1094 686h103M1094 732h103M1094 778h103M1094 824h103" stroke="#C5CFD4" strokeOpacity=".26" strokeWidth="1" />
        </g>

        <g className="hero-skyline-side">
          <path d="M1260 900V328l77-48 77 48v572h-154Z" fill="url(#tower-fill-side)" stroke="#AEBCC6" strokeOpacity=".42" strokeWidth="1.5" />
          <path d="M1260 328l77-48 77 48v572h-154Z" fill="url(#tower-windows-small)" opacity=".58" />
          <Windows windows={sideWindows} />
          <path d="M1260 328l77-48 77 48M1337 280v620" stroke="#C5CFD4" strokeOpacity=".3" strokeWidth="1.2" />
          <path d="M1410 900V478l57-36 57 36v422h-114Z" fill="url(#tower-fill)" stroke="#AEBCC6" strokeOpacity=".36" strokeWidth="1.5" />
          <path d="M1410 478l57-36 57 36v422h-114Z" fill="url(#tower-windows-small)" opacity=".48" />
          <Windows windows={farSideWindows} />
          <path d="M1410 478l57-36 57 36M1467 442v458" stroke="#C5CFD4" strokeOpacity=".27" strokeWidth="1.2" />
        </g>

        <path className="hero-skyline-trace" d="M700 900h880" stroke="url(#architectural-line)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
