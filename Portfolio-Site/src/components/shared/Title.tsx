const Title = ({
  title,
  align,
}: {
  title: { mainTitle?: string; subTitle1?: string; subTitle2?: string };
  align: string;
}) => {
  const { mainTitle, subTitle1, subTitle2 } = title;
  return (
    <div
      className={`${
        align === "m" ? "flex flex-col justify-center items-center" : ""
      } my-3 space-y-4`}
    >
      <h1 className="text-[#c4c6d3] text-3xl md:text-5xl font-bold ">
        {mainTitle}
      </h1>
      {subTitle1 && subTitle2 && (
        <p className="text-[#c4c6d3] text-lg md:text-xl ">
          {subTitle1} || {subTitle2}
        </p>
      )}
    </div>
  );
};

export default Title;
