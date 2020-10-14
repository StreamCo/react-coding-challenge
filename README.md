## Damon Solution:

### How to run the app:

Step 1: Run `yarn` command to install npm packages

Step 2 (optional): Run `yarn build` to generate `dist` folder to check the build files 

Step 3: Run `yarn watch` to start the app



### Q & A:
How did you decide on the technical and architectural choices used as part of your solution?

After I have read the readme details, I have decides to use following technologies to build up this app:
  - `webpack` (for compling at runtime)
  - <a href="https://andela.com/insights/structuring-your-react-application-atomic-design-principles/" taget="_blank">Atomic design principles</a> for building up React components structure (previous experience)
  - `styled-components` for build my custom compoennts easier
  - `react hooks` for create my own hooks for hnadling API requests
  - `react-testing library` I have been thinking of doing unit tests (If I can have 2 more hours, I can do it)

Are there any improvements you could make to your submission?
  - Unit tests need to be covered
  - css need to be improved [try to follow with design as much as I can]
  - webpack plugins knowledge weakness (need to investigate more)
  - support better responsive display

What would you do differently if you were allocated more time?
  - defnitely add unit tests (eg: test the custom hook function I wrote)
  - polish `webpack.config.js` file
  - make pixel prefect css (eg: top head bar ingradiant and bottom shadow effect and button styling etc)
  - also will test more responsive display with different browsers (capability)
  - improve variable constant namings
  - separate css into few files
  - maybe can try on `http-server` library to host `sample.json` file in order to make API request 
  - take out `feed` folder from `src` folder
