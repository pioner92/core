interface IConvertCoordinatesToNumberProps {
  longitude: string;
  latitude: string;
}

export const convertCoordinatesToNumber = ({
  latitude,
  longitude,
}: IConvertCoordinatesToNumberProps) => {
  return {
    longitude: +longitude,
    latitude: +latitude,
  };
};
