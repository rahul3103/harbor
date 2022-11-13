function HeaderSkeleton() {
  return (
    <div className="w-full rounded-2.5xl pl-4 md:px-8">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 h-3 rounded bg-slate-200"></div>
              <div className="col-span-1 col-start-3 h-3 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSkeleton;
