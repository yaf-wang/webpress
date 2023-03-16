# Linux 操作案例

## Mysql

## Tomcat

## Nginx

## RabbitMQ

## Redis

Redis 是基于 C 语言开发，主要特点：

- key-value 方式存储；
- 快，redis 是基于内存存储方式；
- 原子操作

### 安装 EPEL

## ElasticSearch

全文检索属于最常见的需求，开的 ElasticSearch （简称 es）是目前全文检索引擎的首选。他可以快速存储、搜索、分析海量数据。维基百科、stack overflow、GitHub 都采用它。

### 可视化 web 界面

由于 Elasticsearch 的交互方式是 Rest 形式的，这种不是很直观方便，我们先安装图视化界面，方便我们操作。可选择的目前主要有 elasticsearch-head 和 kibana。

- elasticsearch-head
  是一个用于浏览和与 elasticsearch 集群交互的 Web 前端。elasticsearch-head 是 elasticsearch 集群管理、数据可视化、增删查改、查询语句可视化工具。elasticsearch head 是托管的，可以在 github 下载或 fork。
- Kibana
  Kibana 和 elasticsearch 同属于 elastic 公司。 Kibana 是一个开源分析和可视化平台，旨在与 Elasticsearch 协同工作。您使用 Kibana 搜索，查看和与存储在 Elasticsearch 索引中的数据进行交互。您可以轻松地执行高级数据分析，并在各种图表，表格和地图中可视化您的数据。

## ZooKeeper

## Kafka

## Hadoop

## HBase

HBase 是一种分布式、可扩展、支持海亮数据存储的 NoSQL 数据库。和 Redis 一样，也是采用 KeyValue 型存储数据库。

对比 Redis 不同之处：

- Redis 设计是少量数据，超快检索；
- HBase 设计是海量数据，快速检索；

## Spark\Flink
