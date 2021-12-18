export type apiTypes = {
  result: {
    main: {
      pressure: number;
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    name: string;
    weather: [];
  };
};
