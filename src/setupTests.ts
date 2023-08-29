// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// import { server } from './mocks/server';

// async tests can sometimes take longer due to testing accessibilities.
// sometimes it fails due to exceeding the max 5000ms per test guideline.
// Therefore, the temporary solution was to increase these specific test to have 20000ms timeout
// https://github.com/testing-library/dom-testing-library/issues/820
jest.setTimeout(20000);

// Save the console.error function to reset it after each test
// console.error could be mocked within tests because error boundary testing throws errors that cause output to console.error
// Mocking console.error is used to hide the expected console output and check that it is called an expected amount of times.
const { error } = console;

// Establish API mocking before all tests.
// beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
//   server.resetHandlers();
  jest.clearAllMocks();

  // Reset console.error to its original function in case it was mocked in a test
  console.error = error;
});

// Clean up after the tests are finished.
afterAll(() => {
//   server.close();
});

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
