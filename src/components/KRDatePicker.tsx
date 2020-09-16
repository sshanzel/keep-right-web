import React from 'react';
import clx from 'classnames';
import KRInputLabel from './KRInputLabel';
import KRInputContainer from './KRInputContainer';

export type KRDatePickerProps = React.InputHTMLAttributes<HTMLInputElement> & {
  shadow?: boolean;
  border?: boolean;
  filled?: boolean;
  value?: Date;
  label?: string;
  format?: Intl.DateTimeFormat;
  onDateChange?: (value: Date) => void;
};

const defaultFormat = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const getFormattedValue = (value?: Date, format?: Intl.DateTimeFormat): string => {
  const newFormat = format || defaultFormat;
  const date = (value && new Date(Date.parse(value.toString()))) || new Date();
  const [{value: month}, , {value: day}, , {value: year}] = newFormat.formatToParts(date);

  return `${year}-${month.padStart(2, '0')}-${day}`;
};

const KRDatePicker: React.FC<KRDatePickerProps> = ({
  shadow,
  border,
  value,
  format,
  label,
  filled,
  className,
  onDateChange,
  ...props
}) => {
  const [date, setDate] = React.useState(() => new Date());

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const date = new Date(e.target.value);

      setDate(date);

      if (!onDateChange) return;

      onDateChange(new Date(getFormattedValue(date)));
    },
    [onDateChange],
  );

  return (
    <KRInputContainer className={className}>
      <KRInputLabel>{label}</KRInputLabel>
      <input
        {...props}
        type="date"
        style={{paddingTop: '12px'}}
        className={clx(
          `w-full p-2 outline-none text-gray-700 focus:bg-gray-200`,
          filled ? 'bg-gray-100' : '',
          {shadow, border},
        )}
        onChange={handleChange}
        value={getFormattedValue(date, format)}
      />
    </KRInputContainer>
  );
};

export default KRDatePicker;
