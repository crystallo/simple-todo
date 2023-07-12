export const Day = () => {
  const getTodayDate = () => {
    const currentDate: Date = new Date();
    const dayOfWeek = currentDate.toLocaleString("default", {
      weekday: "long",
    });
    const month: string = currentDate.toLocaleString("default", {
      month: "long",
    });
    const dayOfMonth: number = currentDate.getDate();

    return {
      day: dayOfWeek,
      month,
      date: dayOfMonth,
    };
  };

  const date = getTodayDate();

  return (
    <div className="flex flex-col items-center mt-16 rounded-lg">
      <h1 className="text-2xl font-semibold uppercase">{date.day}</h1>
      <div className="text-lg font-medium text-slate-500">
        {date.month} {date.date}
      </div>
    </div>
  );
};
