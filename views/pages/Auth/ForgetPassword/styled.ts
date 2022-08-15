import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Type = styled.div`
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme, active }) =>
    active ? theme.colors.textColor : theme.colors.secondaryTextColor};
  background-color: ${({ theme, active }) =>
    active ? theme.auth.typeActiveBg : theme.colors.background};
  position: relative;
  margin-right: 20px;
  padding: 8px 24px;
`;

export const TypeWrapper = styled.div`
  margin-top: 25px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  span {
    margin: 0 10px;
  }
`;
