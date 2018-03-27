import { InjectionToken } from '@angular/core';

const GeneratorService = new InjectionToken<Object>('GeneratorService');

let chars = [];
const buildChars = (): Array<string> => {
  const resultChars = [];

  const fromCharCodeRange = (min: number, max: number) => {
    for (let i = min; i < max; i++) {
      resultChars.push(String.fromCharCode(i));
    }
  };

  // build number
  fromCharCodeRange(48, 58);

  // build lower case
  fromCharCodeRange(97, 123);

  // build upper case
  fromCharCodeRange(65, 91);
  return resultChars;
};

const generatorN = (n) => {
  if (!chars.length) {
    chars = buildChars();
  }

  return (): string => {
    let resultString = '';

    for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      resultString += chars[randomNumber];
    }

    return resultString;
  };
};

export {
  generatorN,
  GeneratorService,
};
