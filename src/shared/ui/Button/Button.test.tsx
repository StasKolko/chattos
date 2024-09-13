import {
  Button,
  ButtonOptions,
  ButtonSizes,
  ButtonVariantsBtnAndIcon,
  ButtonVariantsLink
} from "@/shared/ui/Button";
import {
  render,
  screen
} from '@testing-library/react'
import cls from './Button.module.css'

describe('Button', () => {
  it('should check the button in the document', () => {
    render(<Button option="btn" variant="secondary" size="md">
      кнопка
    </Button>)

    expect(screen.getByTestId('button')).toBeInTheDocument();
  })

  it.each([
    { option: 'btn', variant: 'destructive', size: "lg" },
    { option: 'btn', variant: 'ghost', size: "md" },
    { option: 'btn', variant: 'outline', size: "sm" },
    { option: 'btn', variant: 'primary', size: "xs" },
    { option: 'btn', variant: 'secondary', size: "md" },
    { option: 'btn', variant: 'successful', size: "md" },
    { option: 'icon', variant: 'destructive', size: "lg" },
    { option: 'icon', variant: 'ghost', size: "md" },
    { option: 'icon', variant: 'outline', size: "sm" },
    { option: 'icon', variant: 'primary', size: "xs" },
    { option: 'icon', variant: 'secondary', size: "md" },
    { option: 'icon', variant: 'successful', size: "md" },
    { option: 'link', variant: 'primary', size: "lg" },
    { option: 'link', variant: 'secondary', size: "md" },
    { option: 'link', variant: 'secondary', size: "sm" },
    { option: 'link', variant: 'secondary', size: "xs" },
  ])('should render Button with classes', ({ option, variant, size }) => {
    const buttonOptions = option as ButtonOptions;
    const buttonVariants = variant as ButtonVariantsBtnAndIcon | ButtonVariantsLink;
    const buttonSizes = size as ButtonSizes;

    render(<Button
      option={buttonOptions}
      variant={buttonVariants}
      size={buttonSizes}>
      кнопка
    </Button>)

    expect(screen
      .getByTestId('button'))
      .toHaveClass(
        cls[buttonOptions],
        cls[buttonVariants],
        cls[buttonSizes]
      );
  })

  it('should check the button like a asChild', () => {
    render(<Button asChild option="btn" variant="secondary" size="md">
      <a href="#">
        кнопка
      </a>
    </Button>)

    const button = screen.getByTestId('button');

    expect(button.tagName).toBe('A');
    expect(button.textContent).toBe('кнопка');
    expect(button).toHaveAttribute('href', '#');
  })
})