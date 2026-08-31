import { useState } from "react";
import { infoCardsData, type InfoCardsData } from "../types";

const InfoCard = ({
  icon,
  iconBg,
  cardTitle,
  titleColor,
  numberColor,
  cardNumber,
  title,
  subTitle,
  cardText,
  children,
}: InfoCardsData) => {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-neutral-50 p-5 shadow-sm md:p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={icon}
            alt=""
            className={`${iconBg} rounded-xl p-2.5 md:p-3 shrink-0`}
          />

          <h2
            className={`${titleColor} font-dm-mono text-xs md:text-sm uppercase tracking-widest`}
          >
            {cardTitle}
          </h2>
        </div>

        <p
          className={`${numberColor} font-fraunces text-2xl md:text-3xl shrink-0`}
        >
          {cardNumber}
        </p>
      </div>

      {/* Title */}
      <h3 className="mt-5 font-fraunces text-xl text-neutral-900 md:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <div className="mt-3 space-y-2 text-neutral-600">
        <p className="font-dm-sans text-sm">{subTitle}</p>

        {cardText && (
          <p className="font-dm-sans text-sm">
            {cardText}
          </p>
        )}
      </div>

      {children && <div className="mt-5">{children}</div>}
    </div>
  );
};

const InfoCardsSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("soleil-2026");
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {infoCardsData.map((card) => (
        <InfoCard key={card.cardTitle} {...card}>
          {card.cardTitle === "Wifi" && (
            <div className="mt-4 space-y-3">
              {/* Network */}
              <div className="flex flex-col gap-2 rounded-2xl bg-neutral-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-dm-mono text-xs uppercase tracking-wide text-neutral-600">
                  Network
                </p>

                <p className="font-dm-sans text-sm text-neutral-700 break-all">
                  Le Soleil · Guest
                </p>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-3 rounded-2xl bg-neutral-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-dm-mono text-xs uppercase tracking-wide text-neutral-600">
                  Password
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-dm-sans text-sm text-neutral-700 break-all">
                    soleil-2026
                  </p>

                  <button
                    onClick={handleCopy}
                    className="rounded-full border border-neutral-900 px-3 py-1 font-dm-mono text-xs uppercase tracking-wide text-neutral-700 transition hover:bg-neutral-900 hover:text-white"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </InfoCard>
      ))}
    </section>
  );
};

export default InfoCardsSection;