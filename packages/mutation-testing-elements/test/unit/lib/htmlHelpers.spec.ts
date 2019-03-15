import { escapeHtml, getContextClassForStatus } from '../../../src/lib/htmlHelpers';
import { expect } from 'chai';
import { MutantStatus } from 'mutation-testing-report-schema';

describe(getContextClassForStatus.name, () => {
  function actArrangeAssert(expected: string, input: MutantStatus) {
    it(`should should show "${expected}" for "${input}"`, () => {
      expect(getContextClassForStatus(input)).eq(expected);
    });
  }
  actArrangeAssert('success', MutantStatus.Killed);
  actArrangeAssert('danger', MutantStatus.Survived);
  actArrangeAssert('danger', MutantStatus.NoCoverage);
  actArrangeAssert('warning', MutantStatus.Timeout);
  actArrangeAssert('secondary', MutantStatus.CompileError);
  actArrangeAssert('secondary', MutantStatus.RuntimeError);
});

describe(escapeHtml.name, () => {
  function actArrangeAssert(input: string, expectedOutput: string) {
    it(`should translate ${input} to ${expectedOutput}`, () => {
      expect(escapeHtml(input)).eq(expectedOutput);
    });
  }

  actArrangeAssert('foo&bar', 'foo&amp;bar');
  actArrangeAssert('foo<bar', 'foo&lt;bar');
  actArrangeAssert('foo>bar', 'foo&gt;bar');
  actArrangeAssert('foo"bar', 'foo&quot;bar');
  actArrangeAssert('foo\'bar', 'foo&#039;bar');
});