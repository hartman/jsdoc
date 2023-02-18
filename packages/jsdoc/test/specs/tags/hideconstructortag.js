/*
  Copyright 2017 the JSDoc Authors.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
describe('@hideconstructor tag', () => {
  const docSet = jsdoc.getDocSetFromFile('test/fixtures/hideconstructortag.js');
  const toaster = docSet.getByLongname('Toaster')[0];
  const waffleIron = docSet
    .getByLongname('WaffleIron')
    .filter(({ undocumented }) => !undocumented)[0];

  it('should add a `hideconstructor` attribute to pre-ES2015 classes', () => {
    expect(toaster.hideconstructor).toBeTrue();
  });

  it('should add a `hideconstructor` attribute to ES2015 classes when the constructor is tagged', () => {
    expect(waffleIron.hideconstructor).toBeTrue();
  });
});