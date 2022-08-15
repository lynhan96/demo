import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  margin-top: 10px;
  padding: 0 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export const BoldText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const QRCodeWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.auth.qrCodeBg};
`;

export const Notice = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 24px;
  color: #697281;
  text-align: center;
`;

export const Loading = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 178px;
  height: 178px;
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0;
`;

export const TimerText = styled.div`
  font-size: 14px;
  color: #697281;
`;
