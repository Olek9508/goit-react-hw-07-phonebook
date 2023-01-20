import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './SpinningLoader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="#b6d5d8"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderContainer>
  );
};

