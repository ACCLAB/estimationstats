# Estimation Stats
A Flask webapp to enable users to perform estimation-based visualization and analysis of data.
Webapp at www.estimationstats.com/#/

Note: On 13 April 2023, adamcc changed the repo name from contrast-webapp to estimationstats. This may break some of these installation instructions.

## Installation

1. Install NodeJs https://nodejs.org/en/download/

2. Install vue-cli.

```shell
npm install -g @vue/cli
```

3. Install required node modules.

```shell
cd contrast-webapp/webapp/static
npm install
```

## Development

```shell
npm run dev
```
It will start an express server for frontend. Hot reload will be enabled, when you edit a source file, the browser will be auto reload.

You will need start the Python server also, so the frontend can work properly. In a new Terminal window, enter

```shell
cd contrast-webapp # the root directory of this repo
python run.py
```

The frontend is using `127.0.0.1:5000` for API calls. If you use another port for Python server, you should modify method `getBaseURL` in `common.js` file.

## Production

To bundle all required resource file to `contrast-webapp/webapp/static/dist` folder, run

```shell
npm run build
```


## Staging

First, create and add the staging remote to your repo.
```shell
heroku git:remote -a staging-remote-appname
git remote rename heroku staging
```

Then, push the testing branch to the master branch on the staging remote.
```shell
git push staging testing-branch:master
```

## Deployment

```shell
git push live master
```
