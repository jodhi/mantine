import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { DarkStory } from '../../../demos/DarkStory/DarkStory';
import { Button } from '../Button';
import { Group } from '../Group';
import { Stepper, StepperProps } from './Stepper';

function Wrapper(props: Partial<StepperProps>) {
  const [active, setActive] = useState(1);

  return (
    <>
      <Stepper active={active} onStepClick={setActive} {...props}>
        <Stepper.Step label="First" description="First description">
          First step content here
        </Stepper.Step>
        <Stepper.Step label="Second" description="Second description">
          Second step content here
        </Stepper.Step>
        <Stepper.Step label="Last" description="Last description">
          Last step content here
        </Stepper.Step>
      </Stepper>

      <Group mt={40}>
        <Button variant="default" onClick={() => setActive(active - 1)}>
          Previous
        </Button>

        <Button onClick={() => setActive(active + 1)}>Next</Button>
      </Group>
    </>
  );
}

const sizes = MANTINE_SIZES.map((size, index) => (
  <Wrapper key={size} size={size} mt={index !== 0 ? 60 : 0} />
));

const verticalSizes = MANTINE_SIZES.map((size, index) => (
  <Wrapper key={size} size={size} mt={index !== 0 ? 60 : 0} orientation="vertical" />
));

storiesOf('@mantine/core/Stepper', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Wrapper color="teal" />
    </div>
  ))
  .add('Vertical orientation', () => (
    <div style={{ padding: 40 }}>
      <Wrapper orientation="vertical" />
      <Wrapper orientation="vertical" iconPosition="right" mt="xl" />
    </div>
  ))
  .add('Icon position right', () => (
    <div style={{ padding: 40 }}>
      <Wrapper iconPosition="right" />
    </div>
  ))
  .add('Loading state', () => (
    <div style={{ padding: 40 }}>
      <Stepper active={0}>
        <Stepper.Step label="First" />
        <Stepper.Step label="Second" loading />
        <Stepper.Step label="Third" />
      </Stepper>
    </div>
  ))
  .add('Icons only', () => (
    <div style={{ padding: 40 }}>
      <Stepper active={1}>
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
      </Stepper>

      <Stepper active={1} mt={60} orientation="vertical">
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
      </Stepper>
    </div>
  ))
  .add('Responsive', () => (
    <div style={{ padding: 40 }}>
      <Wrapper breakpoint="sm" />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Vertical sizes', () => (
    <div style={{ padding: 40 }}>
      {verticalSizes}
      <Wrapper mt={60} orientation="vertical" iconSize={80} />
    </div>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 40 }}>
        <Wrapper color="teal" />

        <Stepper active={2} mt="xl">
          <Stepper.Step label="First" />
          <Stepper.Step label="Second" loading />
          <Stepper.Step label="Third" />
        </Stepper>
      </div>
    </DarkStory>
  ));
