"use client";

type Props = {
  progress: number;
};

const Streak = ({ progress }: Props) => {
  const radius = 42;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 7;

  return (
    <div className="relative">
      <svg width={100} height={100} viewBox={`0 0 100 100`}>
        <circle
          cx={50}
          cy={50}
          strokeWidth="12px"
          r={radius}
          className="circle-background"
        />
        <circle
          cx={50}
          cy={50}
          strokeWidth="12px"
          r={radius}
          className="circle-progress"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 50 50)`}
        />
        <text x="36" y="45" fill="#eeff87" className="font-bold">
          {progress}/7{" "}
          <tspan x="24" y="65" fill="white">
            Streak
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default Streak;
