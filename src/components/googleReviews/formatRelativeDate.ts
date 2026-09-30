const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

const relativeTimeFormatter = new Intl.RelativeTimeFormat("pt-BR", {
  numeric: "always",
});

function parseDate(date: string | Date) {
  if (date instanceof Date) {
    return Number.isNaN(date.getTime())
      ? null
      : {
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDate(),
        };
  }

  const match = date.match(/^(\d{4})[-/](\d{2})[-/](\d{2})$|^(\d{2})[-/](\d{2})[-/](\d{4})$/);

  if (!match) return null;

  const year = Number(match[1] ?? match[6]);
  const month = Number(match[2] ?? match[5]) - 1;
  const day = Number(match[3] ?? match[4]);
  const parsedDate = new Date(year, month, day);

  if (
    parsedDate.getFullYear() !== year ||
    parsedDate.getMonth() !== month ||
    parsedDate.getDate() !== day
  ) {
    return null;
  }

  return { year, month, day };
}

function getCompletedMonths(
  start: { year: number; month: number; day: number },
  end: { year: number; month: number; day: number },
) {
  const months = (end.year - start.year) * 12 + end.month - start.month;
  return months - (end.day < start.day ? 1 : 0);
}

export function formatRelativeDate(
  reviewDate: string | Date,
  currentDate = new Date(),
) {
  const review = parseDate(reviewDate);
  const current = parseDate(currentDate);

  if (!review || !current) {
    return typeof reviewDate === "string" ? reviewDate : "";
  }

  const reviewTimestamp = Date.UTC(review.year, review.month, review.day);
  const currentTimestamp = Date.UTC(current.year, current.month, current.day);
  const differenceInDays = Math.round(
    (reviewTimestamp - currentTimestamp) / DAY_IN_MILLISECONDS,
  );

  if (differenceInDays === 0) return "hoje";
  if (differenceInDays === -1) return "ontem";

  const absoluteDays = Math.abs(differenceInDays);

  if (absoluteDays < 7) {
    return relativeTimeFormatter.format(differenceInDays, "day");
  }

  if (absoluteDays < 30) {
    return relativeTimeFormatter.format(Math.trunc(differenceInDays / 7), "week");
  }

  const isPast = differenceInDays < 0;
  const start = isPast ? review : current;
  const end = isPast ? current : review;
  const completedMonths = Math.max(1, getCompletedMonths(start, end));
  const direction = isPast ? -1 : 1;

  if (completedMonths < 12) {
    return relativeTimeFormatter.format(direction * completedMonths, "month");
  }

  return relativeTimeFormatter.format(
    direction * Math.trunc(completedMonths / 12),
    "year",
  );
}
