# Setup

- Create Astro application
- Push to new GitHub repo

## create GitHub repo

- create repo: do not include .gittignore, readme or license
- [https://github.com/ibbrett/ecmascript](https://github.com/ibbrett/ecmascript)

## create Astro application, push to repo

```sh
nvm use 20.0.0
npm create astro@latest ecmascript -- --template blog --install --typescript strict --git
cd ecmascript
git add .
git commit -m "Create Astro Transition TypeScript application"
git remote add origin git@github.com:ibbrett/ecmascript.git
git branch -M master
git push -u origin master
```
