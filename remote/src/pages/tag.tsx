import styled from "styled-components";

// export const StyledTagLabel = styled.span`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `;

const StyledTagLabel: any = styled.span`
  background-color: ${({ theme }: any) => theme?.bg};
`;

export const Tag = () => {
  return (
      <StyledTagLabel>Test</StyledTagLabel>
  );
};

export default Tag
