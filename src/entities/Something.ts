import Type from './Type';
import BaseEntity from './BaseEntity';
import SomethingTag from './SomethingTag';

export default interface Something extends BaseEntity {
  typeId: number;

  type?: Type;
  somethingTags?: SomethingTag[];
}
