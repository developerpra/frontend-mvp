const Loading: React.FC = () => {
  return (
    <div className="grid place-items-center h-full w-full">
      <svg viewBox="0 0 800 200" className="w-[80%] max-w-[900px]">
        {/* STROKE LAYER */}
        <text
          x="50"
          y="140"
          fontSize="150"
          fontWeight="900"
          fontFamily="Arial, Helvetica, sans-serif"
          className="fill-none stroke-primary stroke-[3px] animate-stroke"
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: 900,
          }}
        >
          CAMIN
        </text>

        {/* FILL LAYER */}
        <text
          x="50"
          y="140"
          fontSize="150"
          fontWeight="900"
          fontFamily="Arial, Helvetica, sans-serif"
          className="fill-primary animate-fill"
        >
          CAMIN
        </text>
      </svg>
    </div>
  );
};

export default Loading;
