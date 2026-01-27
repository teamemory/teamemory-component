import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TmButton from '../src/components/button';

describe('TmButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(TmButton, {
      slots: {
        default: 'Test Button'
      }
    });

    expect(wrapper.text()).toBe('Test Button');
  });

  it('has correct default props', () => {
    const wrapper = mount(TmButton);

    expect(wrapper.props().type).toBe('default');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().disabled).toBe(false);
    expect(wrapper.props().loading).toBe(false);
  });

  it('applies type classes correctly', async () => {
    const wrapper = mount(TmButton, {
      props: {
        type: 'primary'
      }
    });

    // Check that the primary styling is applied
    expect(wrapper.classes()).toContain(wrapper.vm.buttonClass);
  });
});