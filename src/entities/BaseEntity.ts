export default interface BaseEntity<T = number> {
  id: T;
  title: string;
  description?: string;
}
