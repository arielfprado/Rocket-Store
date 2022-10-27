import * as Styles from "./styles";
import { IPaginationProps } from "./types";
import { ImRadioChecked } from "react-icons/im";
import { VscCircleFilled } from "react-icons/vsc";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const Pagination = (props: IPaginationProps) => {
  const { currentPage, maxPageLimit } = props;

  const pages = [];
  if (maxPageLimit) {
    for (let i = 0; i < maxPageLimit; i++) {
      pages.push(i + 1);
    }
  }

  const handlePrevClick = () => {
    props.onPrevClick();
  };

  const handleNextClick = () => {
    props.onNextClick();
  };

  return (
    <Styles.Container>
      {props.children}
      <div className="page-buttons">
        <button
          className="prev-button"
          onClick={handlePrevClick}
          disabled={currentPage === pages[0] - 1}
        >
          <FiArrowLeft />
        </button>

        <div className="page-icons">
          {pages.map((page) => {
            return page - 1 === currentPage ? (
              <ImRadioChecked className="page-icon" />
            ) : (
              <VscCircleFilled className="page-icon" />
            );
          })}
        </div>

        <button
          className="next-button "
          onClick={handleNextClick}
          disabled={currentPage === pages.length - 1}
        >
          <FiArrowRight />
        </button>
      </div>
    </Styles.Container>
  );
};
