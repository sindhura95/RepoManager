import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Overview } from '../app/components/Overview';

describe('Overview', () => {
    it('renders a overview component with Nav bar', () => {
        render(<Overview />)
        const navBarItem = screen.getByText('Git Repository Management');
        expect(navBarItem).toBeInTheDocument();
    })
})

describe('Overview', () => {
    it('renders a overview component with Input form', () => {
        render(<Overview />)
        const formItems = screen.getAllByRole('textbox');
        expect(formItems).toHaveLength(2);
    })
})