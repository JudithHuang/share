# 常见问题

## 无法 watch 实时编译

```shell
# 修改 max_user_watches
sudo sysctl fs.inotify.max_user_watches=524288
# 查看 max_user_watches 值
sysctl -a | grep inotify
```