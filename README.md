# project_yamame
[![Chromatic](https://github.com/daily-fishmonger/project_yamame/actions/workflows/chromatic.yml/badge.svg)](https://github.com/daily-fishmonger/project_yamame/actions/workflows/chromatic.yml)
[![Firebase Hosting](https://github.com/daily-fishmonger/project_yamame/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/daily-fishmonger/project_yamame/actions/workflows/firebase-hosting-merge.yml)

## Site
https://daily-fishmonger.web.app/

## 環境構築
```
$ mkdir workspace && cd workspace
$ git clone git@github.com:shinonome-inc/project_yamame.git
$ cd project_yamame
```

### ローカルでの開発 (yarnで環境が整っていることが前提)
パッケージのインストール
```
$ yarn
```

アプリケーションの起動
```
$ yarn dev
```
[localhost:3000](http://localhost:3000)にアクセスして確認する。

storybookの起動
```
$ yarn storybook
```
[localhost:6006](http://localhost:6006)にアクセスして確認する。

### リファレンス
See [Configuration Reference](https://cli.vuejs.org/config/).
