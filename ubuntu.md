# 常用

## ubuntu 解压文件名乱码解决

- unzip -O GB18030 文件名

## 卸载软件

```shell
# 查看已安装的软件包
dpkg --list
# 完全删除软件
sudo apt-get --purge remove <programname>
# 删除软件, 但是保留配置文件
sudo apt-get remove <programname>
```