# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Custom Color Variables in Sass

This repository contains a set of custom color variables defined in Sass format in common-sass folder. These color variables can be used to maintain a consistent color scheme throughout your project's styles.

## Color Categories
| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary 100 | ![#18A0FB](https://via.placeholder.com/10/18A0FBtext=+) #18A0FB |
| Primary 200 | ![#36BFFA](https://via.placeholder.com/10/36BFFA?text=+) #36BFFA |
| Primary 300 | ![#5CC8FF](https://via.placeholder.com/10/5CC8FF?text=+) #5CC8FF |
| Primary 400 | ![#7CD4FD](https://via.placeholder.com/10/00b48a?text=+) #7CD4FD |

## Usage
These color variables can be easily integrated into your Sass styles by referencing the variable names provided above. By using variables, you can maintain a consistent color scheme across your application and make it easier to update the colors in one place.

For example, to use the primary 100 color in your styles:
```bash
 .my-element {
  background-color: $clr-primary-100;
  color: $clr-secondary-500;
}
```

