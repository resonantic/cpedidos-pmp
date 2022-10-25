import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useHash } from './useHash';

describe('useHash', () => {
  it('should init with an empty string hash', () => {
    const { result } = renderHook(() => useHash('test'));

    expect(result.current.getHash()).toBe('');
  });

  it('should set a hash with format "number_param"', () => {
    const { result } = renderHook(() => useHash('test'));

    act(() => {
      result.current.setHash('param');
    });

    expect(result.current.getHash()).toBe('1_param');
  });

  it('should set a hash with format "number_param1_param2"', () => {
    const { result } = renderHook(() => useHash('test'));

    act(() => {
      result.current.setHash('param1', 'param2');
    });

    expect(result.current.getHash()).toBe('2_param1_param2');
  });

  it('should return the same hash on different hook instances with same id', () => {
    const { result: result1 } = renderHook(() => useHash('test'));
    const { result: result2 } = renderHook(() => useHash('test'));

    act(() => {
      result1.current.setHash('param');
    });

    expect(result1.current.getHash()).toBe(result2.current.getHash());
  });

  it('should NOT return the same hash on different hook instances with different id', () => {
    const { result: result1 } = renderHook(() => useHash('test1'));
    const { result: result2 } = renderHook(() => useHash('test2'));

    act(() => {
      result1.current.setHash('param');
    });

    expect(result1.current.getHash()).not.toBe(result2.current.getHash());
  });

  it('should return true when comparated hash is equal to current hash', () => {
    const { result } = renderHook(() => useHash('test'));

    act(() => {
      result.current.setHash('param');
    });

    const camparatedHash = result.current.getHash();

    expect(result.current.compareHash(camparatedHash)).toBe(true);
  });

  it('should return false when comparated hash is NOT equal to current hash', () => {
    const { result } = renderHook(() => useHash('test'));

    const camparatedHash = result.current.getHash();

    act(() => {
      result.current.setHash('param');
    });

    expect(result.current.compareHash(camparatedHash)).toBe(false);
  });
});
