import {
  FaqListItemStyled,
  FaqListItemText,
  FaqListItemTitle,
} from "./FaqItem.styled";
import PropTypes from "prop-types";

export const FaqItem = ({ number, title, text, $isOpen, onItemClick }) => {
  return (
    <FaqListItemStyled $isOpen={$isOpen} onClick={onItemClick}>
      <FaqListItemTitle $isOpen={$isOpen} $number={number}>
        {title}
      </FaqListItemTitle>
      {$isOpen && <FaqListItemText>{text}</FaqListItemText>}
    </FaqListItemStyled>
  );
};

FaqItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  $isOpen: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired,
};
