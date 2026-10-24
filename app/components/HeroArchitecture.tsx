const featureWindows = Array.from({ length: 16 }, (_, row) =>
  Array.from({ length: 3 }, (_, column) => ({
    x: 1092 + column * 39,
    y: 291 + row * 38,
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

const skylineStars = [
  [742, 171, 1.1], [786, 86, 1.7], [823, 218, 1], [858, 128, 1.2],
  [899, 50, 1.4], [927, 191, 1.1], [966, 104, 2], [1004, 50, 1.1],
  [1038, 220, 1.4], [1080, 76, 1.1], [1110, 187, 1.1], [1169, 42, 1.8],
  [1208, 227, 1], [1242, 117, 1.2], [1281, 60, 1.5], [1316, 184, 1],
  [1358, 91, 1.8], [1391, 231, 1.2], [1430, 40, 1.1], [1474, 145, 1.5],
  [1512, 78, 1.2], [1550, 202, 1.1], [1583, 112, 1.6], [902, 40, 1],
  [1055, 153, 1.1], [1271, 30, 1.1], [1455, 60, 1.2], [1530, 28, 1.5],
].map(([x, y, radius], index) => ({
  x,
  y,
  radius,
  delay: `${(index % 7) * 0.42}s`,
}));

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

        <g className="hero-stars">
          {skylineStars.map(({ x, y, radius, delay }, index) => (
            <circle
              key={`${x}-${y}`}
              className={index % 6 === 0 ? 'hero-star hero-star-bright' : 'hero-star'}
              cx={x}
              cy={y}
              r={radius}
              style={{ animationDelay: delay }}
            />
          ))}
        </g>

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
            d="M1082 900V276l63-100 64 100v624h-127Z"
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
          <path d="M1145 177v723M1094 300h103M1094 346h103M1094 392h103M1094 438h103M1094 484h103M1094 530h103M1094 576h103M1094 622h103M1094 668h103M1094 714h103M1094 760h103M1094 806h103M1094 852h103" stroke="#C5CFD4" strokeOpacity=".26" strokeWidth="1" />
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
