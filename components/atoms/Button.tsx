import styles from '@styles/atoms/Button.module.scss';
import Link, {LinkProps} from 'next/link';
import type {ReactNode} from 'react';

interface Props extends LinkProps {
  children: ReactNode;
  arrowRight?: boolean;
}

const Button = (props: Props): JSX.Element => {
  return (
    <Link {...props}>
      <a className={styles.button + ' clickable'}>
        <span className={styles.inner}>
          <span>{props.children}</span>
          {props.arrowRight && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="86"
              height="16"
              viewBox="0 0 86 16">
              <path d="M85.7071 8.7071C86.0976 8.31657 86.0976 7.68341 85.7071 7.29289L79.3431 0.928925C78.9526 0.538401 78.3195 0.538401 77.9289 0.928925C77.5384 1.31945 77.5384 1.95261 77.9289 2.34314L83.5858 7.99999L77.9289 13.6568C77.5384 14.0474 77.5384 14.6805 77.9289 15.0711C78.3195 15.4616 78.9526 15.4616 79.3431 15.0711L85.7071 8.7071ZM8.74228e-08 9L85 8.99999L85 6.99999L-8.74228e-08 7L8.74228e-08 9Z" />
            </svg>
          )}
        </span>
      </a>
    </Link>
  );
};

export default Button;
