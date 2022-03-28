import dateFnsFormat from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";

const formatUnixDate = (unixTime: number, format: string): string => {
  const d: Date = fromUnixTime(unixTime);

  return dateFnsFormat(d, format);
};

export { formatUnixDate };
