import { useEffect, useState } from "react";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import * as S from "./styles";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { handleLogin } from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email é necessário")
    .email("Formato de email inválido"),
  password: yup
    .string()
    .required("Senha necessária")
    .min(6, "Minimo de 6 caracteres"),
});

export const LoginScreen: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [userEmail, setUserEmail] = useState<string>("");
  const {
    control,
    handleSubmit,
    
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: userEmail,
      password: "",
    }
  });
  

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
    //TODO: por algum motivo isso sempre tá devolvendo true mesmo se a senha ou email estiverem errados
    handleLogin(data)
      ? navigation.navigate("Home")
      : console.error("Erro ao logar");
  };

  // Function to retrieve user's email from AsyncStorage
  const getUserEmailFromStorage = async () => {
    try {

      const userEmail = await AsyncStorage.getItem("@user:email");

      console.log("User email from storage:", userEmail);
      if (userEmail) {
        navigation.navigate("Home");
        //Create a toast to show the info that user already logged
        Toast.show({
          type: 'success',
          text1: 'Logado!',
        });
      }
    } catch (error) {
      console.error("Error retrieving user email:", error);
    }
  };

  useEffect(() => {
    getUserEmailFromStorage();
  }, []);

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <Controller
        control={control}
        render={({ field }) => <S.Input {...field} placeholder="Email" />}
        name="email"
      />
      {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}
      <Controller
        control={control}
        render={({ field }) => (
          <S.Input {...field} placeholder="Senha" secureTextEntry />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <S.ErrorText>{errors.password.message}</S.ErrorText>}
      <S.Button onPress={handleSubmit(onSubmit)}>
        <S.ButtonText>Log In</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};
