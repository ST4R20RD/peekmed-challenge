import styled, { css, keyframes } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AiFillFilePdf } from "react-icons/ai";

export function DownloadCV() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <Button
      href="https://drive.google.com/file/d/1g5aKBIfFTY7h_cD5XLW4kq9agnZyg3-U/view"
      target="_blank"
      rel="noreferrer"
      lightMode={lightMode}
    >
      <AiFillFilePdf />
      Curriculum Vitae
    </Button>
  );
}

const lightThemeStyles = css`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
`;

const darkThemeStyles = css`
  background: linear-gradient(180deg, rgba(141, 141, 141, 0) 0%, rgba(141, 141, 141, 0.2) 100%);
`;

const slideInBottom = keyframes`
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Button = styled.a<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  color: white;
  border: none;
  padding: 6px 30px;
  font-size: 2rem;
  border-radius: 30px;
  margin-top: 10px;
  font-style: italic;
  display: flex;
  align-items: center;
  svg {
    margin-right: 13px;
  }
  animation: ${slideInBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.6s both;
`;
