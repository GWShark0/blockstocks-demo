import { rest } from 'msw';

export const handlers = [
  rest.get('/stocks*', (req, res, ctx) => {
    const code = req.url.searchParams.get('code');

    return res(
      ctx.status(200),
      ctx.json({
        code,
        value: 150.12,
      })
    );
  }),
];
