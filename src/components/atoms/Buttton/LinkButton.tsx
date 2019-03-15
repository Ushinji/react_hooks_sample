import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type Props = LinkProps;

const LinkButton: React.FC<Props> = props => {
  return <Link {...props} />;
};

export default LinkButton;
