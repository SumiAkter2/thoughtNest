const SpentTime = ({ readingTime }) => {
  return (
    <div className="mb-6">
      {" "}
      <h1 className="text-2xl font-bold text-[#8b3b00] border p-4 rounded-md">
        Spent Time On Read: {readingTime} Min
      </h1>
    </div>
  );
};

export default SpentTime;
