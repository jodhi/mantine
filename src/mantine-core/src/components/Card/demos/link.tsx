import React from 'react';
import { Card, Image, Text } from '../../../index';
import { demoBase } from './_demo-base';

const code = `
<Card
  shadow="sm"
  padding="xl"
  component="a"
  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  target="_blank"
>
  <Card.Section>
    <Image src="unsplash.png" height={160} alt="No way!" />
  </Card.Section>

  <Text weight={500} size="lg">
    You've won a million dollars in cash!
  </Text>

  <Text size="sm">
    Please click anywhere on this card to claim your reward, this is not a fraud, trust us
  </Text>
</Card>
`;

function Demo() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          height={160}
          alt="No way!"
        />
      </Card.Section>

      <Text weight={500} size="lg" style={{ marginTop: 15 }}>
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text style={{ marginTop: 7 }} size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
  );
}

export const link: MantineDemo = {
  ...demoBase,
  type: 'demo',
  code,
  component: Demo,
};
