# 安装

## Ubuntu

## Mac os

- 准备

```shell
brew install automake autoconf curl pcre re2c mhash libtool icu4c gettext jpeg libxml2 mcrypt gmp libevent libpng freetype
brew link icu4c
ln -s /usr/local/include/freetype2 /usr/local/include/freetype2/freetype
```

- 安装

```shell
curl -L -O https://github.com/phpbrew/phpbrew/raw/master/phpbrew
chmod +x phpbrew
sudo mv phpbrew /usr/bin/phpbrew
phpbrew init
source ~/.phpbrew/bashrc
phpbrew lookup-prefix homebrew
```

- 安装 error

```shell
Error: homebrew prefix '/usr/local/Cellar/readline/7.0.3_1' doesn't exist. you forgot to install?
Solve: brew install readline
```