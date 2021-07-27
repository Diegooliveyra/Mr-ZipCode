import * as S from './styles';

const Button = ({ children, ...props }) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};

export default Button;
