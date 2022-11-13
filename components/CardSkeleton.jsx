function Skeleton() {
  return (
    <div className="w-full rounded-2.5xl border bg-white py-4 pl-4 shadow-card md:py-6 md:px-8">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 h-3 rounded bg-slate-200"></div>
              <div className="col-span-1 col-start-3 h-3 rounded bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 h-3 rounded bg-slate-200"></div>
              <div className="col-span-1 col-start-4 h-3 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
