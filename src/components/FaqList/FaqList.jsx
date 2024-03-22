import { useState } from "react";
import { Container } from "../Container/Container.styled";
import { FaqItem } from "../FaqItem/FaqItem";
import { FaqListStyled, FaqTitle } from "./FaqList.styled";

export const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <Container>
      <FaqTitle>Faq</FaqTitle>
      <FaqListStyled>
        <FaqItem
          number="[ 1 ]"
          title="WHAT IS AN NFT COLLECTION?"
          text="An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style."
          $isOpen={openIndex === 0}
          onItemClick={() => handleItemClick(0)}
        />
        <FaqItem
          number="[ 2 ]"
          title="HOW DO I PURCHASE NFTS FROM A COLLECTION?"
          text="To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace."
          $isOpen={openIndex === 1}
          onItemClick={() => handleItemClick(1)}
        />
        <FaqItem
          number="[ 3 ]"
          title="CAN I SELL OR TRADE NFTS FROM A COLLECTION?"
          text="Yes, you can sell or trade NFTs from a collection like you would other digital assets."
          $isOpen={openIndex === 2}
          onItemClick={() => handleItemClick(2)}
        />
        <FaqItem
          number="[ 4 ]"
          title="WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?"
          text="As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights."
          $isOpen={openIndex === 3}
          onItemClick={() => handleItemClick(3)}
        />
      </FaqListStyled>
    </Container>
  );
};
