import { receiptData } from "../types";

const BookingHeader = () => {
  const formatICSDate = (
    dateStr: string,
    timeStr: string,
    year: string,
  ): string => {
    const months: Record<string, string> = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    const [day, monthAbbr] = dateStr.split(" ");
    const month = months[monthAbbr];
    const paddedDay = day.padStart(2, "0");
    const [hours, minutes] = timeStr.split(":");

    return `${year}${month}${paddedDay}T${hours}${minutes}00`;
  };

  const generateICS = (): string => {
    const start = formatICSDate(
      receiptData.checkIn.date,
      receiptData.checkIn.time,
      "2026",
    );
    const end = formatICSDate(
      receiptData.checkOut.date,
      receiptData.checkOut.time,
      "2026",
    );

    return [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${start}`,
      `DTEND:${end}`,
      "SUMMARY:Stay at Maison Soleil",
      "LOCATION:12 Rue des Oliviers, Cassis",
      "DESCRIPTION:Booking confirmed \\u2014 La Garrigue",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
  };

  const handleAddToCalendar = () => {
    const icsContent = generateICS();
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "maison-soleil-booking.ics";
    link.click();

    URL.revokeObjectURL(url);
  };
  return (
    <div className="md:flex justify-between print:hidden">
      <div className="mb-2">
        <p className="font-dm-mono text-sm text-neutral-600">
          BOOKING · CONFIRMED
        </p>
        <h2 className="font-fraunces text-3xl md:text-4xl text-neutral-900">
          Bienvenue,<span className="italic text-terracotta-600"> Lucia.</span>
        </h2>
      </div>
      <div className="flex items-center gap-3  print:hidden">
        <button
          className=" text-xs md:text-sm text-neutral-900 border border-neutral-600 px-5 py-2 rounded-full"
          onClick={() => window.print()}
        >
          Print receipt
        </button>
        <button
          className="text-xs md:text-sm bg-neutral-900 text-neutral-50  px-5 py-2 rounded-full"
          onClick={handleAddToCalendar}
        >
          Add to calendar
        </button>
      </div>
    </div>
  );
};

export default BookingHeader;
