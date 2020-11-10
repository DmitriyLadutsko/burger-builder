# Useful Resources & Links
- create-react-app: https://github.com/facebookincubator/create-react-app
- Introducing JSX: https://reactjs.org/docs/introducing-jsx.html
- Rendering Elements: https://reactjs.org/docs/rendering-elements.html
- Components & Props: https://reactjs.org/docs/components-and-props.html
- Listenable Events: https://reactjs.org/docs/events.html

## List & Conditional
- Conditional Rendering: https://reactjs.org/docs/conditional-rendering.html
- Lists & Keys: https://reactjs.org/docs/lists-and-keys.html

## Styling React Components
- Using CSS Modules in create-react-app Projects: https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2
- More information about CSS Modules: https://github.com/css-modules/css-modules

## Debugging
- Error Boundaries: https://reactjs.org/docs/error-boundaries.html
- Chrome Devtool Debugging: https://developers.google.com/web/tools/chrome-devtools/javascript/

## Diving Deeper
- More on useEffect(): https://reactjs.org/docs/hooks-effect.html
- State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html
- PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html
- Higher Order Components: https://reactjs.org/docs/higher-order-components.html
- Refs: https://reactjs.org/docs/refs-and-the-dom.html

## Reaching out to the Web (Http /Ajax)
- Axios Docs: https://github.com/axios/axios

## Removing Interceptors  
You learned how to add an interceptor, getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call eject  with that reference as an argument, to remove it (more info: https://github.com/axios/axios#interceptors):

`var myInterceptor = axios.interceptors.request.use(function () {/*...*/});`
`axios.interceptors.request.eject(myInterceptor);`

## Multi-Page-Feeling in a Single-Page-App: Routing
- React Router Docs: https://reacttraining.com/react-router/web/guides/philosophy

## Forms and Form Validation
- Validate.js (you may import its functionality into your React projects): https://validatejs.org/
- Get more ideas about potential validation approaches: https://react.rocks/tag/Validation
### Alternatives to the manual approach taken in this course:

- react-validation package: https://www.npmjs.com/package/react-validation
- formsy-react package: https://github.com/christianalfoni/formsy-react

## Redux
- Redux Docs: https://redux.js.org/

- Core Concepts: https://redux.js.org/introduction/core-concepts

- Actions: https://redux.js.org/basics/actions

- Reducers: https://redux.js.org/basics/reducers

- Redux FAQs: https://redux.js.org/faq

## Redux Advanced
- Middleware: https://redux.js.org/advanced/middleware/

- redux-thunk package: https://github.com/gaearon/redux-thunk

- Async Actions: https://redux.js.org/advanced/async-actions

## SPA Authentication
- SPA Authentication in general: https://stormpath.com/blog/token-auth-spa
- Firebase authentication REST API: https://firebase.google.com/docs/reference/rest/auth/ 

## Testing
- Enzyme API: http://airbnb.io/enzyme/docs/api/
- Jest Docs: https://facebook.github.io/jest/