import { IBlog } from "@/src/types/blog.type";
import { IDate } from "@/src/types/date.type";
import { dateToISO } from "@/src/utils/dateToISO";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import "../../../styles/TextPreview.css";
import React from "react";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  const {
    _id,
    title,
    thumbnail,
    author,
    content,
    likes,
    isFeatured,
    createdAt,
  } = blog;

  const dateCreated: { formattedDate: string; formattedTime: string } =
    dateToISO(createdAt as IDate);

  return (
    <div className="bg-[#0a0b29] flex flex-col xl:flex-row items-center gap-6 xl:gap-3 p-5 rounded-lg">
      <div className="w-fit h-fit">
        <Image removeWrapper src={thumbnail} className="size-[200px]" />
      </div>

      <div className="w-full flex flex-col gap-6 xl:gap-4 text-[#c4c6d3]">
        <h1 className="text-white text-lg xl:text-xl">{title}</h1>

        <div className="flex justify-between items-center text-xs">
          <p>Posted on {dateCreated.formattedDate}</p>
          {isFeatured && (
            <div className="w-fit py-1 px-3 rounded-full bg-white text-pink-500">
              <p>Featured</p>
            </div>
          )}
        </div>

        <div>
          <p
            className="text-preview text-base text-justify"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="flex gap-3">
          <Button isIconOnly className="bg-[#c4c6d3] text-[#0a0b29]">
            <i className="fa-solid fa-circle-info" />
          </Button>
          <Button isIconOnly className="bg-[#c4c6d3] text-[#0a0b29]">
            <i className="fa-solid fa-file-pen" />
          </Button>
          <Button isIconOnly className="bg-[#c4c6d3] text-[#0a0b29]">
            <i className="fa-solid fa-trash" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
