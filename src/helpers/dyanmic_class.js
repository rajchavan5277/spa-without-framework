import ClassOne from './ClassOne';
import ClassTwo from './ClassTwo';

const classes = { ClassOne, ClassTwo };

export default function dynamicClass (name) {
  return classes[name];
}