# Estimation Stats
A Flask webapp to enable users to perform estimation-based visualization and analysis of data.

## Installation

1. Install NodeJs https://nodejs.org/en/download/

2. Install required node modules

```console
cd contrast-webapp/webapp/static
npm install
```
3. For development  enviroment, run
```console
npm run dev
```

It will start an express server for frontend. Hot reload will be enabled, when you edit a source file, the browser will be auto reload. You will need start the Python server also, so the frontend can work properly.

The frontend is using `127.0.0.1:5000` for API calls. If you use another port for Python server, you should modify method `getBaseURL` in `common.js` file.

For production, run
``console
npm run build
```

It will bundle all required resource file to `contrast-webapp/webapp/static/dist` folder.
