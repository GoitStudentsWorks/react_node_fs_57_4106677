import styled from 'styled-components';

// webp
import bgMobileWebpx1 from '../../images/PageLayout/page-layout-bg-mobil-x1.webp';
import bgMobileWebpx2 from '../../images/PageLayout/page-layout-bg-mobil-x2.webp';

import bgTabletWebpx1 from '../../images/PageLayout/page-layout-bg-tablet-x1.webp';
import bgTabletWebpx2 from '../../images/PageLayout/page-layout-bg-tablet-x2.webp';

import bgDesktopWebpx1 from '../../images/PageLayout/page-layout-bg-desktop-x1.webp';
import bgDesktopWebpx2 from '../../images/PageLayout/page-layout-bg-desktop-x2.webp';

// png
import bgMobilePngx1 from '../../images/PageLayout/page-layout-bg-mobil-x1.png';
import bgMobilePngx2 from '../../images/PageLayout/page-layout-bg-mobil-x2.png';

import bgTabletPngx1 from '../../images/PageLayout/page-layout-bg-tablet-x1.png';
import bgTabletPngx2 from '../../images/PageLayout/page-layout-bg-tablet-x2.png';

import bgDesktopPngx1 from '../../images/PageLayout/page-layout-bg-desktop-x1.png';
import bgDesktopPngx2 from '../../images/PageLayout/page-layout-bg-desktop-x2.png';

const darkMode = true;

const objectColors = {
  bgrDarkMode: '#1E1F28',
  bgrCardDarkMode: '#2A2C36',
  bgrBtnDelDarkMode: '#1E1F28',
  colorGreen: '#8BAA36',
  colorWhite: '#FAFAFA',
  colorBlack: '#22252A',
  colorTextDarkMode: 'rgba(250, 250, 250, 0.6)',
  darkColorTitel: '#001833',
  darkColorTitelCard: '#3e4462',
  darkColorTextCard: '#23262a',
};

export const Section = styled.section`
  z-index: 2;
  position: relative;
  background-color: ${darkMode
    ? objectColors.bgrDarkMode
    : objectColors.colorWhite};

  padding-top: 4.625rem;
  padding-bottom: 6.25rem;
  background-repeat: no-repeat;
  background-size: 256px 392px;
  background-position-x: 0;
  background-position-y: 111.5%;

  @media screen and (min-width: 768px) {
    padding-bottom: 12.5rem;
  }

  // ================= adaptive bg images ===============//

  // mobile with webp support
  &.webp {
    background-image: url(${bgMobileWebpx1});
  }
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    &.webp {
      background-image: url(${bgMobileWebpx2});
    }
  }

  // mobile without webp support
  &.no-webp {
    background-image: url(${bgMobilePngx1});
  }
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    &.no-webp {
      background-image: url(${bgMobilePngx2});
    }
  }

  // tablet with webp support
  @media screen and (min-width: 768px) {
    & {
      background-size: 423px 646px;
      background-position-y: 131.5%;
    }

    &.webp {
      background-image: url(${bgTabletWebpx1});
    }
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &.webp {
        background-image: url(${bgTabletWebpx2});
      }
    }

    // tablet without webp support
    &.no-webp {
      background-image: url(${bgTabletPngx1});
    }
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &.no-webp {
        background-image: url(${bgTabletPngx2});
      }
    }
  }

  // desktop with webp support
  @media screen and (min-width: 1024px) {
    & {
      background-size: 558px 852px;
      background-position-y: 149.5%;
    }

    &.webp {
      background-image: url(${bgDesktopWebpx1});
    }
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &.webp {
        background-image: url(${bgDesktopWebpx2});
      }
    }

    // desktop without webp support
    &.no-webp {
      background-image: url(${bgDesktopPngx1});
    }
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &.no-webp {
        background-image: url(${bgDesktopPngx2});
      }
    }
  }
`;

export const RecipeContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding-right: 16px;
  */ @media screen and (min-width 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
export const DecorativeSquare = styled.div`
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;

  aspect-ratio: 1 / 1;
  border-radius: 3px;
  background-color: ${({ color }) => color ?? objectColors.colorBlack};
  transform: rotate(-25deg);

  &[data-1] {
    top: 76px;
    left: 36%;
  }

  &[data-2] {
    background-color: ${darkMode
      ? objectColors.colorWhite
      : objectColors.colorBlack};
    top: 141px;
    left: 67%;
    width: 0.35rem;
    height: 0.35rem;
  }

  &[data-3] {
    top: 108px;
    right: 5%;
  }

  @media screen and (min-width: 768px) {
    width: 0.875rem;
    height: 0.875rem;

    &[data-1] {
      top: 85px;
      left: 219px;
    }

    &[data-2] {
      width: 0.65rem;
      height: 0.65rem;

      top: 155px;
      left: 57%;
    }
    &[data-3] {
      top: 98px;
      right: 5%;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 0.875rem;
    height: 0.875rem;

    &[data-1] {
      top: 116px;
      left: 328px;
    }

    &[data-2] {
      width: 0.65rem;
      height: 0.65rem;

      top: 199px;
      left: 57%;
    }

    &[data-3] {
      top: 129px;
      right: 10%;
    }
  }
`;
