import { onRenderBody } from "../gatsby-ssr";

describe(`gatsby-plugin-incendium`, () => {
  describe(`gatsby-ssr`, () => {
    describe(`onRenderBody`, () => {
      describe(`standard`, () => {
        const setup = (options) => {
          const setHeadComponents = jest.fn();
          const setPostBodyComponents = jest.fn();

          options = Object.assign({}, options);

          onRenderBody({ setHeadComponents, setPostBodyComponents }, options);

          return {
            setHeadComponents,
            setPostBodyComponents,
          };
        };

        it(`setPostBodyComponents called with stanard setup`, () => {
          const { setPostBodyComponents } = setup({
            url: "",
          });

          expect(setPostBodyComponents).toHaveBeenCalled();
        });

        it(`setPostBodyComponents called with namespaced`, () => {
          const { setPostBodyComponents } = setup({
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

          expect(setPostBodyComponents).toHaveBeenCalled();
          const result = JSON.stringify(setPostBodyComponents.mock.calls[0][0]);

          expect(result).toMatch(/a\?no_initial/);
          expect(result).toMatch(/namespace=a/);
          expect(result).toMatch(/b\?no_initial/);
          expect(result).toMatch(/namespace=b/);
        });
        it(`setPostBodyComponents called with namespaced and empty key`, () => {
          const { setPostBodyComponents } = setup({
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

          expect(setPostBodyComponents).toHaveBeenCalled();
          const result = JSON.stringify(setPostBodyComponents.mock.calls[0][0]);

          expect(result).toMatch(/a\?no_initial/);
          expect(result).toMatch(/namespace=test1/);
          expect(result).toMatch(/b\?no_initial/);
          expect(result).not.toMatch(/namespace=\\/);
        });
      });
    });
  });
});
