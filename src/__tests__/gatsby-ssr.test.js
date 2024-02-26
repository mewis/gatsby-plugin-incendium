import { onRenderBody } from "../gatsby-ssr";

describe(`gatsby-plugin-incendium`, () => {
  describe(`gatsby-ssr`, () => {
    describe(`onRenderBody`, () => {
      describe(`standard`, () => {
        const setup = (options) => {
          const setHeadComponents = jest.fn();

          options = Object.assign({}, options);

          onRenderBody({ setHeadComponents }, options);

          return {
            setHeadComponents,
          };
        };

        it(`setHeadComponents called with stanard setup`, () => {
          const { setHeadComponents } = setup({
            url: "",
          });

          expect(setHeadComponents).toHaveBeenCalled();
        });

        it(`setHeadComponents called with namespaced`, () => {
          const { setHeadComponents } = setup({
            url: "astre",
            namespaced: {
              a: {
                url: "a",
              },
              b: {
                url: "b",
              },
            },
          });

          expect(setHeadComponents).toHaveBeenCalled();
          const result = JSON.stringify(setHeadComponents.mock.calls[0][0]);

          expect(result).toMatch(/a\?no_initial/);
          expect(result).toMatch(/namespace=a/);
          expect(result).toMatch(/b\?no_initial/);
          expect(result).toMatch(/namespace=b/);
        });
        it(`setHeadComponents called with namespaced and empty key`, () => {
          const { setHeadComponents } = setup({
            url: "",
            namespaced: {
              test1: {
                url: "a",
              },
              "": {
                url: "b",
              },
            },
          });

          expect(setHeadComponents).toHaveBeenCalled();
          const result = JSON.stringify(setHeadComponents.mock.calls[0][0]);

          expect(result).toMatch(/a\?no_initial/);
          expect(result).toMatch(/namespace=test1/);
          expect(result).toMatch(/b\?no_initial/);
          expect(result).not.toMatch(/namespace=\\/);
        });
      });
    });
  });
});
