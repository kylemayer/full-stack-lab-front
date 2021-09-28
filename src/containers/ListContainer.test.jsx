import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ListContainer from '../containers/ListContainer';

const server = setupServer(
  rest.get('http://localhost:7890/api/v1/beer', (req, res, ctx) => {
    return res(ctx.json());
  })
);

describe('Beer List Container page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of beer', async () => {
    render(
      <MemoryRouter>
        <ListContainer />
      </MemoryRouter>
    );
  });
});
