const SKIN = "#F3C29B";
const HAIR = "#1C0E0E";
const DRESS = "#FF4D4D";
const DRESS_DARK = "#B3282E";
const BLUSH = "#FF8E7A";

export function HeroGirl() {
  return (
    <svg
      viewBox="0 0 400 540"
      className="h-full w-full girl-float"
      role="img"
      aria-label="Illustration of Neethika waving hello"
    >
      {/* glow behind */}
      <ellipse cx="200" cy="300" rx="170" ry="190" fill="url(#glow)" opacity="0.7" />
      <defs>
        <radialGradient id="glow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF4D4D" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* resting arm */}
      <path
        d="M148,300 Q108,340 112,400"
        stroke={DRESS}
        strokeWidth="30"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="112" cy="404" r="16" fill={SKIN} />

      {/* dress / body */}
      <path
        d="M150,292 Q200,272 250,292 L302,438 Q200,472 98,438 Z"
        fill={DRESS}
      />
      <path
        d="M150,292 Q200,272 250,292 L260,320 Q200,304 140,320 Z"
        fill={DRESS_DARK}
        opacity="0.5"
      />
      <ellipse cx="200" cy="368" rx="76" ry="10" fill={DRESS_DARK} opacity="0.8" />

      {/* waving arm */}
      <g className="girl-wave-arm">
        <path
          d="M252,296 Q300,270 296,206"
          stroke={DRESS}
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="296" cy="200" r="17" fill={SKIN} />
      </g>

      {/* neck */}
      <rect x="185" y="248" width="30" height="46" rx="14" fill={SKIN} />

      {/* head group (nods) */}
      <g className="girl-head">
        {/* hair back */}
        <circle cx="200" cy="168" r="104" fill={HAIR} />

        {/* ponytails */}
        <ellipse cx="88" cy="205" rx="24" ry="58" fill={HAIR} transform="rotate(18 88 205)" />
        <ellipse cx="312" cy="205" rx="24" ry="58" fill={HAIR} transform="rotate(-18 312 205)" />

        {/* head */}
        <circle cx="200" cy="182" r="90" fill={SKIN} />

        {/* hair fringe */}
        <path
          d="M110,150 Q120,80 200,78 Q280,80 290,150 Q260,110 200,112 Q140,110 110,150 Z"
          fill={HAIR}
        />

        {/* blush */}
        <ellipse cx="148" cy="210" rx="16" ry="10" fill={BLUSH} opacity="0.55" />
        <ellipse cx="252" cy="210" rx="16" ry="10" fill={BLUSH} opacity="0.55" />

        {/* eyes (with blink) */}
        <g className="girl-blink">
          <circle cx="168" cy="182" r="9" fill="#1C0E0E" />
          <circle cx="232" cy="182" r="9" fill="#1C0E0E" />
          <circle cx="171" cy="179" r="2.4" fill="#FFFFFF" />
          <circle cx="235" cy="179" r="2.4" fill="#FFFFFF" />
        </g>

        {/* smile */}
        <path
          d="M180,212 Q200,228 220,212"
          stroke="#B3282E"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
