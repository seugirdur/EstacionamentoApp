import * as S from "./styles";
import { connect } from "react-redux";
import React, { useState } from "react";
import { RootState } from "../../redux/types";
import { incremented, decremented } from "../../redux/reducers/counterSlice";

interface Props {
  counterValue: number;
  increment: () => void;
  decrement: () => void;
}

const HomeScreenComponent: React.FC<Props> = ({
  counterValue,
  increment,
  decrement,
}) => {
  const [number, setnumber] = useState<string | null>(null);

  const handleIncrement = () => {
    increment();
    setnumber("incremented");
  };

  const handleDecrement = () => {
    decrement();
    setnumber("decremented");
  };

  return (
    <S.Container>
      <S.Title>Home</S.Title>
      <S.Button onPress={handleIncrement}>
        <S.ButtonText>Increment</S.ButtonText>
      </S.Button>
      <S.Button onPress={handleDecrement}>
        <S.ButtonText>Decrement</S.ButtonText>
      </S.Button>
      <S.Counter>Counter Value: {counterValue}</S.Counter>
      {number && <S.Message>Last action: {number}</S.Message>}
    </S.Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  counterValue: state.counter.value,
});

const mapDispatchToProps = {
  increment: incremented,
  decrement: decremented,
};

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);
