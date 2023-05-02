// import {SectionMovie} from '../components/SectionSlider';
// import {Imgs} from '../screens/Home';
import {Card} from '../types/common.types';

export const randomize = (values: Card[]) => {
  let index = values.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (index !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;

    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }

  return values;
};
