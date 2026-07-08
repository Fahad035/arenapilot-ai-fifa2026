const TypingAnimation = () => {
  return (
    <div className="flex items-center gap-2 py-6">

      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:0.15s]"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:0.3s]"></span>

      <span className="ml-3 text-slate-400">
        ArenaPilot AI is analyzing the stadium...
      </span>

    </div>
  );
};

export default TypingAnimation;