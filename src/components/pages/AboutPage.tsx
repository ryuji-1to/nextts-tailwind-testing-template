import type { FC } from 'react';

type PageProps = {
  data?: unknown;
};

export const AboutPage: FC<PageProps> = (props) => {
  if (props.data) {
    return <div>{JSON.stringify(props.data)}</div>;
  }

  return <div>This is a about page.</div>;
};
