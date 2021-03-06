import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

const localStorageMock = { getItem: jest.fn(), setItem: jest.fn(), removeItem: jest.fn() };

global.localStorage = localStorageMock;

configure({ adapter: new Adapter() });
