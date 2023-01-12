import { FC } from "react";
// import { useRouter } from "next/router";
import { Button } from "../Button/Button";
import Arrow from "../../public/arrow.svg";
import * as SC from "./ButtonsChangePages.styled";

interface IProps {
  changePage: (page: number) => void,
  currentPage: number,
  lastPage: boolean,
}

export const ButtonsChangePages:FC<IProps> = ({ changePage, currentPage, lastPage }) => {
  // const { query } = useRouter();
  // const currentPage = query.page !== "" ? Number(query.page) : "";
  // if (currentPage === "") {
  //   return;
  // }
  return (
    <SC.Wrapp>
      <Button
        btn={"main"}
        onClick={() => changePage(-1)}
        disabled={currentPage === 0}
      >
        <Arrow width={16} height={16} fill={"currentColor"} />
        prev
      </Button>
      <Button
        btn={"main"}
        onClick={() => changePage(1)}
        disabled={lastPage}
      >
        next
        <SC.RotateArrow />
      </Button>
    </SC.Wrapp>
  );
};
