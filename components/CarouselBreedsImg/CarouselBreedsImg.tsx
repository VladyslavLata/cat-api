import { FC } from "react";
import Image from "next/image";
import { IDataCat } from "../../types/types";
import * as SC from "./CarouselBreedsImg.styled";

interface IProps {
  dataCats: IDataCat[];
}

export const CarouselBreedsImg: FC<IProps> = ({ dataCats }) => {
  return (
    <SC.CarouselWrapp
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      autoPlay
      infiniteLoop
      animationHandler="fade"
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{  width: "10px", height: "10px", background: "#FF868E", cursor: "pointer" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#FBE0DC",
              cursor: "pointer"
            }}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {dataCats.map(({ id, url }) => (
        <Image
          key={id}
          src={url}
          fill
          alt={"cat"}
          sizes="(max-width: 375px) 90vw,
        (min-width: 376px) 295px, (min-width: 768px) 670px
              (mai-width: 1440px) 640px"
        />
      ))}
    </SC.CarouselWrapp>
  );
};
