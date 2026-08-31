import { houseRules } from "../../types";

const HouseRules = () => {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="font-dm-sans text-xs uppercase tracking-widest text-neutral-600">
          House rules
        </h2>

        <p className="font-fraunces text-md text-neutral-900 mt-1">
          A few things to help everyone enjoy their stay.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
       {houseRules.map((rule) => {
  const Icon = rule.icon;

  return (
    <div
      key={rule.label}
      className="flex items-center gap-4 border-b border-neutral-500 py-4 sm:py-5"
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${rule.iconBg}`}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-800">
          {rule.label}
        </p>

        <p className="mt-1 text-sm text-neutral-500">
          {rule.value}
        </p>
      </div>
    </div>
  );
})}
      </div>
    </section>
  );
};

export default HouseRules;
