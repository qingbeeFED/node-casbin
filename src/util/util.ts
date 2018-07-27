// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as _ from 'lodash';

// escapeAssertion escapes the dots in the assertion,
// because the expression evaluation doesn't support such variable names.

const escapeAssertion: (s: string) => string = (s: string) => {
  s = s.replace(/r\./g, 'r_');
  s = s.replace(/p\./g, 'p_');
  return s;
};

// removeComments removes the comments starting with # in the text.
const removeComments: (s: string) => string = (s: string) => {
  const pos = s.indexOf('#');
  return pos > -1 ? _.trim(s.slice(0, pos)) : s;
};

// arrayEquals determines whether two string arrays are identical.
const arrayEquals: (a: string[], b: string[]) => boolean = (
  a: string[],
  b: string[]
) => {
  return _.isEqual(a, b);
};

// array2DEquals determines whether two 2-dimensional string arrays are identical.
const array2DEquals: (a: string[][], b: string[][]) => boolean = (
  a: string[][],
  b: string[][]
) => {
  return _.isEqual(a, b);
};

// arrayRemoveDuplicates removes any duplicated elements in a string array.
const arrayRemoveDuplicates: (s: string[]) => string[] = (s: string[]) => {
  return _.uniq(s);
};

// arrayToString gets a printable string for a string array.
const arrayToString: (a: string[]) => string = (a: string[]) => {
  return _.join(a, ', ');
};

// paramsToString gets a printable string for variable number of parameters.
const paramsToString: (...v: string[]) => string = (...v: string[]) => {
  return _.join(v, ', ');
};

// setEquals determines whether two string sets are identical.
const setEquals: (a: string[], b: string[]) => boolean = (
  a: string[],
  b: string[]
) => {
  return _.isEqual(_.sortedUniq(a), _.sortedUniq(b));
};

export {
  escapeAssertion,
  removeComments,
  arrayEquals,
  array2DEquals,
  arrayRemoveDuplicates,
  arrayToString,
  paramsToString,
  setEquals
};
