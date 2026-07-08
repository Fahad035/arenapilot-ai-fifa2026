const PageHeader = ({
  title,
  description,
  action,
}) => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-slate-400">
          {description}
        </p>

      </div>

      {action}

    </div>
  );
};

export default PageHeader;