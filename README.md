# Keyword Search Volume Analyzer

This is a React app that allows you to analyze the average search volume for a given keyword on YouTube over a specific time period. It retrieves data from the YouTube API and calculates the average search volume based on the returned results.

## Getting Started

1. Clone this repository to your local machine.
2. Open the project folder in your preferred code editor.
3. Run `npm install` to install the required dependencies.
4. Replace `'YOUTUBE_API_KEY'` in `App.js` with your actual YouTube API key.
5. Run `npm start` to start the development server.

## How to Use

1. Enter a keyword in the input field.
2. Click the "Search" button to calculate the average search volume for the keyword.
3. The calculated average search volume will be displayed below the button.

## Styling

The app is styled using CSS. You can customize the styles by editing the `index.css` file.

## Note

- The calculated average search volume is divided by 12 months(from 2022-08-22 to 2023-08-22)to provide an average per month.
- The search volume data is retrieved from the YouTube API.

##Folders


All components you implement should go in the src/components directory.

