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
  input: string;
  setInput: (event) => void;
};

export type footerItem = {
  item: {
    title: string;
    links: {
      link: string;
    }[];
  };
};
