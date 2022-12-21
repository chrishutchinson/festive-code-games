# Round one – Framework frenzy

1.  Rank these popular JavaScript libraries in order (highest to lowest) of the number of stars they have on GitHub?

        React
        jQuery
        Angular
        Vue
        Solid

2.  Name the framework from the logo (pictures will be presented)

3.  These snippets are all taken from the source code of different frameworks, match the snippet to the framework!

    A:

    ```js
    export function hydrateRoot(container, children, options): RootType {
      if (__DEV__) {
        Internals.usingClientEntryPoint = true;
      }
      try {
        return hydrateRootImpl(container, children, options);
      } finally {
        if (__DEV__) {
          Internals.usingClientEntryPoint = false;
        }
      }
    }
    ```

    B:

    ```js
    function createApplication() {
      var app = function (req, res, next) {
        app.handle(req, res, next);
      };

      mixin(app, EventEmitter.prototype, false);
      mixin(app, proto, false);

      app.request = Object.create(req, {
        app: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: app,
        },
      });

      app.response = Object.create(res, {
        app: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: app,
        },
      });

      app.init();
      return app;
    }
    ```

    C:

    ```ts
    export function append_styles(
      target: Node,
      style_sheet_id: string,
      styles: string
    ) {
      const append_styles_to = get_root_for_style(target);

      if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element("style");
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
      }
    }
    ```

    D:

    ```ts
    export function getFirstComponentChild(
      children?: Array<VNode>
    ): VNode | undefined {
      if (isArray(children)) {
        for (let i = 0; i < children.length; i++) {
          const c = children[i];
          if (
            isDef(c) &&
            (isDef(c.componentOptions) || isAsyncPlaceholder(c))
          ) {
            return c;
          }
        }
      }
    }
    ```

4.  What date was Webpack first released? (dd-mm-yyyy, closest gets the point)

5.  Are these JavaScript frameworks, or Pokémon moves?

        A: Meteor

        B: Facade

        C: Chatter

        D: Backbone

        E: Round

        F: Mithril

        G: Quash

        H: Knockout

        I: Embargo

        J: Polymer
