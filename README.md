# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

const AboutContainer = styled.section`  padding: 4rem 1rem;
  background-color: #222;
  color: #e4ded3;
  text-align: center;`;

const Title = styled.h2`  font-size: 2.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-left: 3rem;`;

const BoxGrid = styled.div`  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;`;

const AboutBox = styled.div`
background: #333;
margin-left: 1rem;
margin-right: 1rem;
padding: 1rem;
border-radius: 8px;
transition:
transform 0.3s ease,
box-shadow 0.3s ease;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
color: #e4ded3;

&:hover {
transform: scale(1.05);
box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
}
`;

const Icon = styled(FontAwesomeIcon)`  font-size: 2rem;
  color: #ff6b6b;
  margin-bottom: 1rem;`;

const BoxTitle = styled.h3`  font-size: 1.5rem;
  margin: 1rem 0 0.5rem;`;

const BoxContent = styled.p`  font-size: 1rem;
  color: #aaa;
  width: 70%;`;

const ExperienceSection = styled.section`  padding: 4rem 1rem;
  background-color: #333;
  color: #e4ded3;
  text-align: left;
  max-width: 100%;
  margin: 0 auto;`;

const SectionTitle = styled.h3`  font-size: 1.8rem;
  margin: 1rem 0 2rem;
  display: flex;
  align-items: center;`;

const SectionIcon = styled(FontAwesomeIcon)`  font-size: 1.5rem;
  color: #ff6b6b;
  margin-right: 0.5rem;
  margin-left: 3rem;`;

const SectionContent = styled.p`  font-size: 1rem;
  color: #aaa;
  margin-left: 3rem;`;
