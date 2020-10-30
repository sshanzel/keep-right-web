import React from 'react';
import clx from 'classnames';
import KRInputLabel from './KRInputLabel';
import KRInputContainer from './KRInputContainer';

export type KRInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  shadow?: boolean;
  border?: boolean;
  filled?: boolean;
  label?: string;
  value?: string;
  onInputChange?: (value: string) => void;
};

const KRInput: React.FC<KRInputProps> = ({
  label,
  value,
  className,
  shadow,
  border,
  filled,
  onChange,
  onInputChange,
  ...props
}) => {
  const [text, setText] = React.useState('');

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (!onInputChange) return;

      onInputChange(e.currentTarget.value);
    },
    [onInputChange],
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist();

      setText(e.target.value);

      if (!onChange) return;

      onChange(e);
    },
    [onChange],
  );

  React.useEffect(() => {
    setText(value || '');
  }, [value]);

  return (
    <KRInputContainer className={`my-2 ${className}`}>
      <KRInputLabel>{label}</KRInputLabel>
      <input
        {...props}
        value={text}
        onBlur={handleBlur}
        onChange={handleChange}
        className={clx(
          `w-full p-2 outline-none text-gray-700 focus:bg-gray-200`,
          filled ? 'bg-gray-100' : '',
          {shadow, border},
        )}
      />
    </KRInputContainer>
  );
};

export default React.memo(KRInput);
