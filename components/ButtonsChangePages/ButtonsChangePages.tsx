import { FC } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../Store/Store";
import Arrow from "../../public/arrow.svg";
import * as SC from "./ButtonsChangePages.styled";

interface IProps {
  amountCats: string;
}

export const ButtonsChangePages: FC<IProps> = ({ amountCats }) => {
  const { lightTheme} = useStore();
  const router = useRouter();
  const { query, pathname } = router;
  const currentPage = Number(query.page);

  const changePage = (value: number) => {
    router.push({
      pathname: pathname,
      query: { ...query, page: currentPage + value },
    });
  };

    const amountPage = () => {
    return Number(amountCats) / Number(query.limit) <= currentPage + 1;
  };

  return (
    <SC.Wrapp>
      <SC.ChangePageBtn
        btn={"main"}
        onClick={() => changePage(-1)}
        disabled={currentPage === 0}
        lightTheme={lightTheme}
      >
        <Arrow width={16} height={16} fill={"currentColor"} />
        prev
      </SC.ChangePageBtn>
      <SC.ChangePageBtn
        btn={"main"}
        onClick={() => changePage(1)}
        disabled={amountPage()}
        lightTheme={lightTheme}
      >
        next
        <SC.RotateArrow />
      </SC.ChangePageBtn>
    </SC.Wrapp>
  );
};
