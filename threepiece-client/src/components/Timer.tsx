import React, { useState, useEffect } from "react";
import { intervalToDuration, formatDuration } from "date-fns";
import { toZonedTime, format } from "date-fns-tz";

interface TimerProps {
  startDate: Date; // The date from which the timer should start
  timeZone: string; // IANA time zone string, e.g., "America/New_York"
}

const Timer: React.FC<TimerProps> = ({ startDate, timeZone }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const zonedTime = toZonedTime(now, timeZone);
      setCurrentTime(zonedTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeZone]);

  const zonedStartDate = toZonedTime(startDate, timeZone);
  const duration = intervalToDuration({
    start: zonedStartDate,
    end: currentTime,
  });
  const formattedDuration = formatDuration(duration, {
    format: ["hours", "minutes", "seconds"],
  });

  return (
    <div>
      <h3>Time Elapsed: {formattedDuration}</h3>
    </div>
  );
};

export default Timer;
