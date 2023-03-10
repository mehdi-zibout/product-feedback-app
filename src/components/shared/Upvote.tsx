import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IconUp } from "../../svgs/Icons";
import TagCard from "./TagCard";

function Upvotes({
  upvotes,
  upvoted,
  className,
  isVertical,
  ...props
}: UpvotesProps) {
  return (
    <TagCard
      isActive={upvoted}
      className={`group/upvote flex min-w-[69px] items-center justify-center py-1.5 px-3 hover:text-dark-blue ${
        isVertical
          ? "tablet:block tablet:min-w-[40px] tablet:pb-2 tablet:pt-[14px]"
          : ""
      }  ${
        upvoted ? "text-white" : "text-dark-blue "
      } text-center text-body3 font-bold  ${className || ""}`}
      {...props}
    >
      <>
        <IconUp
          className={`mr-2  transition duration-300  group-hover/upvote:stroke-blue ${
            isVertical ? "tablet:mx-auto tablet:mb-2" : " "
          } 
            ${upvoted ? "stroke-white " : "stroke-blue  "}`}
        />
        {upvotes}
      </>
    </TagCard>
  );
}

type UpvotesProps = {
  upvoted?: boolean;
  isVertical?: boolean;
  upvotes: number;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export default Upvotes;
