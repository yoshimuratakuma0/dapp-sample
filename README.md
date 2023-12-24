# 環境構築

## Node.js + npm の環境構築

### nvm でバージョン管理する

#### nvm をインストール

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

#### nvm のパスを通す

```
$ vi ~/.zshrc
```

下記を追加

```
export NVM_DIR="$HOME/.nvm"
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh"
[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && . "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"
```

```
$ source ~/.zshrc
```

### Node.js + npm をインストールする

```
$ nvm install v18.19.0
$ nvm use v18.19.0
$ node -v
```

## Ganache のインストール

https://trufflesuite.com/ganache/

## Truffle の環境構築

### Truffle 関連のライブラリを package-lock.json から取得する

```
$ npm ci
```

### Truffle のコンパイル

```
$ truffle compile
```

### Truffle でテストを実行する

```
$ truffle test
```

## ETH テストネットのためのマイニング

0x6AFF9c3138CE36A21C0e0Ad9914Df2AFB81e861c
https://faucets.pk910.de/
