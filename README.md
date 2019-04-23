# The Beer API Project

This is a personal fun project to use the Beer Brewery API and learn more about the most famous beers.

## Setting up a development environment

With the following steps you can setup the project in your local development environment.

**Requirements:**

- Node.js 10+
- npm 6+

### 1. Clone the repository

```bash
git clone https://github.com/Mo3az00/brewerydb-api-react.git
```

### 2. Install packages

```bash
npm install
```

### 3. Create environment file

Copy the sample file:

```bash
cp samples.env .env
```

Edit the file to add your API key:

```env
...
REACT_APP_BEER_API_KEY =
...
```

### 4. Run the development server

```bash
npm start
```

### 5. Open your web browser

[http://localhost:3000](http://localhost:3000)

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Setting up a production environment on Heroku

### 1. Register for Heroku

Go to [https://www.heroku.com/](https://www.heroku.com/) and create an account.

### 2. Add an app

After you successfully create your account and login click the `New` button in your dashboard, select `create new app`

### 3. Connect to Github

In your app page head to `Deploy` then in `Deployment method` section choose `Github` , you can `Enable Automatic Deploys` -optional-

### 4. Add environment variables

=> Go to settings => Config Vars => Reveal Config Vars => Add your `env variables`

### 5. Run the first manual deployment

=> Go to "Deploy" => Press "Manual deploy" and choose branch to deploy
