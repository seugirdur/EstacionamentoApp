import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import * as S from './styles'; 

export const LoginScreen: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Input placeholder="Email" />
      <S.Input placeholder="Senha" secureTextEntry />
      <S.Button onPress={() => navigation.navigate('Home')}>
        <S.ButtonText>Log In</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};
