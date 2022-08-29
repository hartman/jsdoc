describe('@suppress tag', () => {
  const config = jsdoc.deps.get('config');
  const allowUnknownTags = Boolean(config.tags.allowUnknownTags);

  beforeEach(() => {
    config.tags.allowUnknownTags = false;
  });

  afterEach(() => {
    jsdoc.restoreTagDictionary();
    config.tags.allowUnknownTags = allowUnknownTags;
  });

  describe('JSDoc tags', () => {
    beforeEach(() => {
      jsdoc.replaceTagDictionary('jsdoc');
    });

    it('should not recognize the @suppress tag', () => {
      function getDocSet() {
        jsdoc.getDocSetFromFile('test/fixtures/suppresstag.js');
      }

      expect(jsdoc.didLog(getDocSet, 'error')).toBeTrue();
    });
  });

  describe('Closure Compiler tags', () => {
    beforeEach(() => {
      jsdoc.replaceTagDictionary('closure');
    });

    it('should recognize the @suppress tag', () => {
      function getDocSet() {
        jsdoc.getDocSetFromFile('test/fixtures/suppresstag.js');
      }

      expect(jsdoc.didLog(getDocSet, 'error')).toBeFalse();
    });
  });
});