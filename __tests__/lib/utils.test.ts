import { cn } from '../../lib/utils';

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('handles conditional classes', () => {
    expect(cn('a', false && 'b', 'c')).toBe('a c');
  });

  it('removes duplicates with tailwind-merge', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });
});
