import { useState } from "react";
import { Container } from "../Container/Container.styled";
import { FaqItem } from "../FaqItem/FaqItem";
import { FaqListStyled, FaqTitle } from "./FaqList.styled";
import { faqItems } from "./dataList";

export const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <Container>
      <FaqTitle id="faq">Faq</FaqTitle>
      <FaqListStyled>
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            number={item.number}
            title={item.title}
            text={item.text}
            $isOpen={openIndex === index}
            onItemClick={() => handleItemClick(index)}
            src={item.src}
          />
        ))}
      </FaqListStyled>
    </Container>
  );
};
