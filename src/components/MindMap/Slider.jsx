import Slider from "react-slick";
import {
  MindMapSliderItem,
  MindMapSubtitle,
  MindMapText,
  MindMapTitle,
} from "./MindMap.styled";
import { Container } from "../Container/Container.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevButton(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    >
      Prev
    </button>
  );
}

function NextButton(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", background: "yellow" }}
      onClick={onClick}
    >
      Next
    </button>
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  return (
    <Container>
      <MindMapTitle>Mind map</MindMapTitle>
      <Slider {...settings}>
        <MindMapSliderItem>
          <MindMapText>
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </MindMapText>
          <MindMapSubtitle>Yape drop</MindMapSubtitle>
        </MindMapSliderItem>
        <MindMapSliderItem>
          <MindMapText>
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </MindMapText>
          <MindMapSubtitle>New collection</MindMapSubtitle>
        </MindMapSliderItem>

        <MindMapSliderItem>
          <MindMapText>
            Launch your own token, the proceeds of which will go to a global
            fund to LAUNCH YACHT CLUB AND PROMOTE it
          </MindMapText>
          <MindMapSubtitle>Token</MindMapSubtitle>
        </MindMapSliderItem>
        <MindMapSliderItem>
          <MindMapSubtitle>Learn more in mind map</MindMapSubtitle>
        </MindMapSliderItem>
      </Slider>
    </Container>
  );
}

export default SimpleSlider;

{
  /* <Container>
      <MindMapSliderContainer>
        <Slider {...settings}>
          <div>
            <div>
              <MindMapText>
                All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own
              </MindMapText>
              <MindMapSubtitle>Yape drop</MindMapSubtitle>
            </div>
            <div>
              <MindMapText>
                Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game
              </MindMapText>
              <MindMapSubtitle>New collection</MindMapSubtitle>
            </div>
          </div>
          <div>
            <div>
              <MindMapText>
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it
              </MindMapText>
              <MindMapSubtitle>Token</MindMapSubtitle>
            </div>
            <div>
              <MindMapSubtitle>Learn more in mind map</MindMapSubtitle>
            </div>
          </div>
        </Slider>
      </MindMapSliderContainer>
    </Container> */
}
