import {
  render,
  screen
} from '@testing-library/react'
import * as cls from './Button.module.css'
import { AppNav } from './AppNav'

describe('AppNav', () => {
  it('should check the button in the document', () => {
    render(<AppNav />)

    expect(screen.getByTestId('button')).toBeInTheDocument();
  })
})