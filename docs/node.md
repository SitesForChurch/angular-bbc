## Start

before start copy .env_example to .env file
```
your_app_root$ cd .env_example .env
```
and change values in `.env` as needed

in one terminal write 
```
your_app_root$ npm run build
```
and in another
```
your_app_root$ npm start
```
First command will build angular 2 from `src` to `public` folder (need rerun after code change temporary)
Second start nodeJs server on Express on *localhost:3000*

For now when angular-cli not stable need all the time delete public and tmp folders by hand after run every `npm run build`
