


const LeaveStatCard = ({ title, total, used, color }) => {
  const left = total - used;
  const percent = Math.round((used / total) * 100);
  const bgColor = {
        'white': 'bg-[#fefefe]',
        'gray': 'bg-[#c9c9c9]',
        'light-gray': 'bg-[#f6f6f6]'
      }[color];
  return (
    <div className={`${bgColor} rounded-2xl shadow-md p-4  flex flex-col gap-3 font-sans`}>
      <div className="flex justify-between items-center text-base font-medium">
        <span className="font-semibold">{title}</span>
        <span className="text-gray-500 text-sm">{total} days total</span>
      </div>
      <div className="bg-gray-100 rounded h-2 w-full overflow-hidden">
        <div
          className="bg-blue-500 h-full rounded-l transition-all duration-400"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center text-[0.97em]">
        <span className="text-gray-700">Used: {used} days ({percent}%)</span>
        <span className="text-blue-700 font-medium ">{left} left</span>
      </div>
    </div>
  );
};

export default LeaveStatCard;
