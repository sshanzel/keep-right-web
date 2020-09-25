import Something from 'src/entities/Something';

export const getSomethingsByUserId = (userId: number): Promise<Something[]> => {
  return Promise.resolve([
    {
      id: -1,
      title: 'Test',
      typeId: 1,
    },
    {
      id: -2,
      title: 'Sample',
      typeId: 1,
    },
    {
      id: -3,
      title: 'Try',
      typeId: 1,
    },
    {
      id: -1,
      title: 'Test',
      typeId: 1,
    },
    {
      id: -2,
      title: 'Sample',
      typeId: 1,
    },
    {
      id: -3,
      title: 'Try',
      typeId: 1,
    },
    {
      id: -1,
      title: 'Test',
      typeId: 1,
    },
    {
      id: -2,
      title: 'Sample',
      typeId: 1,
    },
    {
      id: -3,
      title: 'Try',
      typeId: 1,
    },
    {
      id: -1,
      title: 'Test',
      typeId: 1,
    },
    {
      id: -2,
      title: 'Sample',
      typeId: 1,
    },
    {
      id: -3,
      title: 'Try',
      typeId: 1,
    },
  ]);
};
