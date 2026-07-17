const RouteFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-950">
    <div
      role="status"
      aria-label="Loading page"
      className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent"
    />
  </div>
);

export default RouteFallback;