import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MutableRefObject,
  useRef,
  useState,
  useEffect
} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ParentsBaseT, ColorBaseT } from '../../interface/common';
import './button.scss';

type OmittedReactButtonElement = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'color'
>;

export interface ButtonPropsI
  extends ParentsBaseT,
    ColorBaseT,
    OmittedReactButtonElement {
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: 'text' | 'outlined' | 'contained';
  /** Callback fired when the button is clicked. */
  onClick?: (...args: any[]) => void;
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /** Same as the prop "to" in react-router-dom <Link />. */
  to?: string;
  /** @ignore */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /** Button border radius in pixels. */
  radius?: number;
  /** Button shape. */
  shape?: 'rectangle' | 'square' | 'round';
}

/**
 * Button
 * Buttons allow users to take actions, and make choices, with a single tap.
 * @param className Class that overrides or extends the styles applied to the component.
 * @param disabled If `true`, the component is disabled.
 * @param href The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node.
 * @param to Same as the prop "to" in react-router-dom <Link />.
 * @param children The content of the component.
 * @param variant The variant to use.
 * @function onClick Callback fired when the button is clicked.
 * @param name The name of the component.
 * @param style Override or extend the styles applied to the component.
 * @param target Specifies where to display the linked URL.
 * @param color The color of the component. It supports those theme colors that make sense for this component.
 * @param radius Button border radius in pixels.
 * @param shape Button shape.
 */
export const Button = ({
  className,
  disabled,
  href,
  to,
  children,
  variant = 'outlined',
  onClick,
  name,
  style,
  target,
  color = 'default',
  radius = 4,
  shape = 'rectangle',
  ...other
}: ButtonPropsI): JSX.Element => {
  const [customizedStyle, setCustomizedStyle] = useState(style);

  const ref: MutableRefObject<HTMLButtonElement | null> = useRef(null);

  const composeClass = () => {
    if (disabled) return `chips-button--${variant}--disabled`;

    const customizedClass = `${className}`;
    const variantClass = `chips-button--${variant}`;
    const colorClass = `${variantClass}--${color}`;
    const outlinedClass = `chips-button--outlined--${color}`;

    return classNames(
      'chips-button',
      { [variantClass]: variant },
      { [colorClass]: color },
      { [outlinedClass]: !variant && color },
      { [customizedClass]: className }
    );
  };

  const handleMouseOver = () => {
    if (!style) return;
    if (disabled) return;
    const { color: textColor, backgroundColor } = style;
    if (!textColor && !backgroundColor) return;
    if (variant === 'outlined' || variant === 'text') {
      setCustomizedStyle({
        ...style,
        color: '#fff',
        backgroundColor: textColor
      });
    }
    if (variant === 'contained') {
      setCustomizedStyle({
        ...style,
        color: backgroundColor,
        backgroundColor: '#fff'
      });
    }
  };

  const handleButtonShape = (squareButtonSide: number) => {
    switch (shape) {
    case 'rectangle':
      setCustomizedStyle({
        ...style,
        borderRadius: `${radius}px`
      });
      break;
    case 'square':
      setCustomizedStyle({
        ...style,
        width: `${squareButtonSide}px`,
        height: `${squareButtonSide}px`,
        borderRadius: `${radius}px`
      });
      break;
    case 'round':
      setCustomizedStyle({
        ...style,
        width: `${squareButtonSide}px`,
        height: `${squareButtonSide}px`,
        borderRadius: `${squareButtonSide}px`
      });
      break;
    default:
      break;
    }
  };

  const renderButton = (onClick?: ButtonPropsI['onClick']) => (
    <button
      className={composeClass()}
      type="button"
      disabled={disabled}
      name={name}
      onClick={onClick}
      style={customizedStyle}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => setCustomizedStyle(customizedStyle)}
      ref={ref}
      {...other}
    >
      <span className="chips-button__text d-flex--center">{children}</span>
    </button>
  );

  useEffect(() => {
    const _width = ref.current?.offsetWidth as number;
    const _height = ref.current?.offsetHeight as number;
    const longerSide = Math.max(_width, _height);

    handleButtonShape(longerSide);
  }, [shape]);

  return (
    <>
      {to ? (
        <Link to={to} target={disabled ? '_self' : target}>
          {renderButton()}
        </Link>
      ) : href ? (
        <a href={disabled ? undefined : href} target={target}>
          {renderButton()}
        </a>
      ) : (
        <>{renderButton(onClick)}</>
      )}
    </>
  );
};
