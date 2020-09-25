import Something from 'src/entities/Something';

export const getSomethingsByUserId = (userId: number): Promise<Something[]> => {
  const somethings: Something[] = [
    {
      id: -1,
      title: 'Test',
      typeId: 1,
      somethingTags: [
        {
          id: -1,
          somethingId: -1,
          tagId: -1,
          tag: {
            id: -1,
            title: 'test',
          },
        },
      ],
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
  ];

  return Promise.resolve(somethings);
};
