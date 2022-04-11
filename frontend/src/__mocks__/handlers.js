import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:50000', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        message: 'Ok',
        data: [
          {
            id: 5,
            title: 'Sample',
            director: 'rilwan',
            plot: 'jhgshbkjl fkjbnkjfbskjbk',
            poster: 'N/A',
          },
        ],
      })
    )
  ),
  // rest.get('http://localhost:50000?q=', (req, res, ctx) =>
  //   res(ctx.status(200), ctx.json({ message: 'Ok', data: [] }))
  // ),
];
