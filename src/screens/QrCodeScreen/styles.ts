import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 8px;
`;

export const Button = styled.Pressable`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 16px;
`;