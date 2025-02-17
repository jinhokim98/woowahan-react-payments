import type { Meta, StoryObj } from '@storybook/react';
import CVCNumber from '../../components/FormField/CVCNumber';
import { fn } from '@storybook/test';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';
import { useState } from 'react';

const previewProps = {
  cardNumberState: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expirationDateState: {
    month: '',
    year: '',
  },
  cardBrandState: '',
  userNameState: '',
  showImageCondition: {
    visaShowCondition: false,
    masterCardShowCondition: false,
  },
  cvcNumberState: '',
  setIsFocusCVCPreview: fn(),
};

const meta = {
  title: 'FormField_CVC',
  component: CVCNumber,
} satisfies Meta<typeof CVCNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  decorators: [
    (Story, context) => {
      const [isFront, setIsFront] = useState<boolean>(false);

      return (
        <div>
          <CardInformationPreview {...previewProps} isFocusCVCPreview={isFront} />
          <Story args={{ ...context.args, setIsFocusCVCPreview: setIsFront }} />
        </div>
      );
    },
  ],
  args: {
    cvcNumberState: '',
    onChange: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: false,
  },
};

export const 정상입력: Story = {
  decorators: [
    (Story, context) => {
      const [isFront, setIsFront] = useState<boolean>(false);

      return (
        <div>
          <CardInformationPreview
            {...previewProps}
            cvcNumberState="123"
            isFocusCVCPreview={isFront}
          />
          <Story args={{ ...context.args, setIsFocusCVCPreview: setIsFront }} />
        </div>
      );
    },
  ],
  args: {
    cvcNumberState: '123',
    onChange: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: false,
  },
};

export const 잘못된_문자_입력: Story = {
  decorators: [
    (Story, context) => {
      const [isFront, setIsFront] = useState<boolean>(false);

      return (
        <div>
          <CardInformationPreview
            {...previewProps}
            cvcNumberState="쿠키"
            isFocusCVCPreview={isFront}
          />
          <Story args={{ ...context.args, setIsFocusCVCPreview: setIsFront }} />
        </div>
      );
    },
  ],
  args: {
    cvcNumberState: '쿠키',
    onChange: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: true,
  },
};

export const 세_자리_수가_아닐_때: Story = {
  decorators: [
    (Story, context) => {
      const [isFront, setIsFront] = useState<boolean>(false);

      return (
        <div>
          <CardInformationPreview
            {...previewProps}
            cvcNumberState="12"
            isFocusCVCPreview={isFront}
          />
          <Story args={{ ...context.args, setIsFocusCVCPreview: setIsFront }} />
        </div>
      );
    },
  ],
  args: {
    cvcNumberState: '12',
    onChange: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: true,
  },
};
