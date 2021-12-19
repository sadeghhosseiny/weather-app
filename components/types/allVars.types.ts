export type apiTypes = {
  result: {
    main: {
      pressure: number;
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    wind: {
      deg: number;
      speed: number;
    };
    name: string;
    weather: [
      {
        icon: string;
        main: string;
      },
    ];
  };
};

export type input = {
  value: string;
  setInput: (event) => void;
};
