import { Container } from "../Container/Container.styled";
import {
  MindMapItem,
  MindMapLink,
  MindMapList,
  MindMapSubtitle,
  MindMapSvg,
  MindMapText,
  MindMapTitle,
} from "./MindMap.styled";
import Icons from "../../img/svg/icons.svg";

export const MindMapTabletDesktop = () => {
  return (
    <Container>
      <MindMapTitle>Mind map</MindMapTitle>
      <MindMapList>
        <MindMapItem>
          <MindMapText>
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </MindMapText>
          <MindMapSubtitle>YAPE DROP</MindMapSubtitle>
        </MindMapItem>
        <MindMapItem>
          <MindMapText>
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </MindMapText>
          <MindMapSubtitle>New Collection</MindMapSubtitle>
        </MindMapItem>
        <MindMapItem>
          <MindMapText>
            Launch your own token, the proceeds of which will go to a global
            fund to LAUNCH YACHT CLUB AND PROMOTE it
          </MindMapText>
          <MindMapSubtitle>Token</MindMapSubtitle>
        </MindMapItem>
        <MindMapItem style={{ backgroundColor: "#dc3b5a" }}>
          <MindMapLink
            href="https://www.linkedin.com/pulse/how-start-nft-collection-walkthrough-guide-brands-creators/"
            target="_blank"
          >
            <MindMapSvg>
              <use href={`${Icons}#icon-arrow`} />
            </MindMapSvg>
          </MindMapLink>
          <MindMapSubtitle>
            Learn
            <br />
            more
            <br />
            in mind map
          </MindMapSubtitle>
        </MindMapItem>
      </MindMapList>
    </Container>
  );
};
