---
title: System design
---

# System design


## Databases
--- 

Database management systems (DBMS) which are usually referred to as just databases are a piece of software that are used stores data in an organized way and offer an API to interact with it.

Depending on the way data is organized and accessed there can be different databases paradigm and we will explore a few of them here.

### Relational databases

Examples: PostgreSQL, MySql, Oracle, Microsoft SQL Server

The most common way to store data is using tables with rows, columns and having relations between them. This kind of database requires a schema to be defined before storing data and they are not very flexible.

Accessing data is done with a domain-specific language called SQL (Structured Query Language).

Example of SQL
```sql
SELECT id, name, age FROM persons where age >= 21
```

Relational databases use ACID transactions
- Atomicity -> all or nothing

- Consistency -> ensures data remains valid according to all defined rules (Primary Key, Foreign Key, Constraints etc.)

- Isolation -> one database transaction is not affected by another one running concurrently and the end result will appear as if the transactions were executed sequentially
 
- Durability -> data persists even in case of power failure

Advantages
- data integrity since transactions are ACID

Disadvantages
- schema definition is required up front
- difficult to scale horizontally 

### Key-value databases

Examples: Redis, Memcached

Simple type of database where the data is stored similar to a HashMap with a key pointing to a value. They are very limited but very fast since usually all the data is kept in memory.

These are usually used as a caching layer on applications.

Advantages
- very fast response time
- easy to manage, no schema required
- can scale horizontally 

Disadvantages
- does not supports joins  
- searching values with anything else but the key (also called a scan) is slow

### Document-oriented databases

Examples: MongoDB, Firestore, DynamoDB

Document-oriented databases organize database in collection of documents where each document can be considered a JSON file and supports indexing on the JSON properties for fast searching but does not support joining collections.

 Advantages
- easy to manage, no schema required
- can scale horizontally
- requires data to be denormalized or embedded in a single document

Disadvantages
- does not supports joins 

## Load balancers
---
WIP

## Microservice
---
WIP

## Logging
---
WIP

## Monitoring and Alerts
---
WIP

### Tools
- Munin
- Data dog
- Splunk
- Prometheous
- Grafana
## 


## Security 
---
WIP

### DDOS attack (Distributed denial of service)

### Zero day exploits

### Cross site scripting(XSS)

### Sql injection

### Principle of least privilege

### CIA triage 
- confidentiality
- integrity
- availability