import styled from 'styled-components';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Head = styled.View``;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  font-family: 'SF Pro Display';
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const SearchInput = styled.TextInput`
  background: #e9e9e9;
  margin-top: 20px;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
`;

export const PokeList = styled(FlatList)``;

export const PokeName = styled.Text``;

