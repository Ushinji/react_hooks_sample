import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = props => {
  return <button {...props} />;
};

export default Button;
