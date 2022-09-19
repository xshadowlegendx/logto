import { render } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

import ForgotPassword from '.';

describe('ForgotPassword', () => {
  it('render email forgot password properly', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/forgot-password/email']}>
        <Routes>
          <Route path="/forgot-password/:method" element={<ForgotPassword />} />
        </Routes>
      </MemoryRouter>
    );

    expect(queryByText('description.reset_password')).not.toBeNull();
    expect(queryByText('description.reset_password_description_email')).not.toBeNull();
  });

  it('render sms forgot password properly', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/forgot-password/sms']}>
        <Routes>
          <Route path="/forgot-password/:method" element={<ForgotPassword />} />
        </Routes>
      </MemoryRouter>
    );

    expect(queryByText('description.reset_password')).not.toBeNull();
    expect(queryByText('description.reset_password_description_sms')).not.toBeNull();
  });
});