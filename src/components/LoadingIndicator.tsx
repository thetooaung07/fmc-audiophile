export const LoadingIndicator = () => {
  return (
    <div className="flex h-screen min-h-screen w-screen items-center justify-center bg-black text-center">
      <div className="animate-ring"></div>
      <span className="loading-text">loading...</span>
    </div>
  );
};
