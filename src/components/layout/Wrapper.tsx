import styled from "styled-components";

type WrapperProps = {
  width: number;
  height: number;
  flex: boolean;
  flexDirection: "row" | "column";
  justifyContent: "center" | "flex-start" | "flex-end";
  alignItems: "center" | "flex-start" | "flex-end";
  margin: string;
  gap: number;
  children?: React.ReactNode;
};

const StyledWrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  display: ${(props) => (props.flex ? "flex" : "block")};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-right: 5rem;
  margin-left: 5rem;
  gap: ${(props) => props.gap}px;

  background-color: blue;

`;

export const Wrapper = ({
  width,
  height,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  margin,
  gap,
  children,
}: WrapperProps) => {
  return (
    <StyledWrapper
      width={width}
      height={height}
      flex={flex}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      gap={gap}
    >
      {children}
    </StyledWrapper>
  );
};
