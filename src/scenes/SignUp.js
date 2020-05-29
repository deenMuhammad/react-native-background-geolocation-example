import React from 'react';
import styled from 'styled-components';

const Signin = ({navigation}) => {
  return (
    <Wreapper>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Input placeholder="Re-Password" />
      <Button
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <ButtonText>SIGN UP</ButtonText>
      </Button>
      <LittleButton
        onPress={() => {
          navigation.goBack();
        }}>
        <LittleButtonText>Already Member?</LittleButtonText>
      </LittleButton>
    </Wreapper>
  );
};

export default Signin;

const Wreapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 50;
  background-color: white;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding: 10px;
  margin-bottom: 60px;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #0c68fb;
`;

const ButtonText = styled.Text`
  font-size: 25px;
  color: white;
`;
const LittleButton = styled.TouchableOpacity`
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const LittleButtonText = styled.Text`
  font-size: 15px;
  color: #707070;
`;
