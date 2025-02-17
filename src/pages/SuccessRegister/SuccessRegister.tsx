import * as Styled from './style';
import SuccessIcon from '../../assets/image/success.svg';
import Button from '../../components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { SuccessCardInfoState } from '../../types/Types';
import { useEffect } from 'react';
import URLS from '../../constants/Urls';

const SuccessRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardInfoState = location.state as SuccessCardInfoState | null;

  useEffect(() => {
    if (cardInfoState === null) {
      navigate(URLS.error);
    }
  }, [cardInfoState, navigate]);

  const cardInfo = `${cardInfoState?.firstCardNumbers}로 시작하는
  ${cardInfoState?.cardBrand}가 등록되었어요.`;

  const goRegisterPage = () => {
    navigate(URLS.register);
  };

  return (
    <Styled.Container>
      <Styled.SuccessIcon src={SuccessIcon} alt="" />
      <Styled.CardInfo>{cardInfo}</Styled.CardInfo>
      <Styled.BackButton>
        <Button style={{ borderRadius: 8 }} onClick={goRegisterPage}>
          확인
        </Button>
      </Styled.BackButton>
    </Styled.Container>
  );
};

export default SuccessRegister;
