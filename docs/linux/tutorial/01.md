# Linux 介绍

## 常用版本

- 发行版本
  - Red Hat Linux
  - Ubuntu Linux
  - CentOS
  - Debian Linux(docker 中常使用)

## 命令

### 命令基本格式

命令的通用格式：`commond [-options] [parameter]`

- commond：命令本身；
- -options：可选，命令的一些配置，可以通过选项控制命令的行为细节；
- parameter：可选，命令的参数，多数用于命令的指向目标等；

```shell
## ls：是命令，-l：选项，/home/temp：是参数；查看 temp 目录下的内容
ls -l /home/temp

## 复制 temp1 目录到 temp2
cp -r temp1 temp2
```
