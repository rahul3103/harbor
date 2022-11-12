function Paper({ children }) {
  return (
    <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
      {children}
    </div>
  );
}

export default Paper;
