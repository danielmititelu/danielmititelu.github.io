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

## Networking
---

### Open System Interconnect (OSI) model

1. Physical

Handles transferring bits from one computer to another

2. Data link

Handles framing which groups a set of bits together in a frame and retransmits this frame if it's lost or corrupted

3. Network

Determines the best route to transmit the frame and attaches the sender and receiver IP addresses 

4. Transport

Transports the message through the network using segments.

5. Session

This layer starts, maintains and ends a connection between two nodes

6. Presentation

It will translate, encrypt and compress the data being transmitted. It is also know as the translation layer  

7. Application
Applications generate and receive data that must go through the network

### TCP/IP Model 

- Application layer - process to process communication
- Transport Layer - host to host communication
- Internet Layer - handles communication between networks
- Network access/Link Layer - handles communication in a local network

### TCP three-way handshake
1. (SYN) Clients initiate the connection and sends a SYN (Synchronize Sequence Number) segment which tels with what sequence number to start

2. (SYN-ACK) Server responds with a SYN-ACK that it's acknowledging the SYN it received 

3. (ACK) The client responds to the server with ACK and they establish a connection and can start data transfer 

### TCP/IP

What happens when you enter a URL in a browser?
- if the URL content is in the cache and it's fresh then retrieve it from cache
- else perform DNS resolution on the URL
- search the browser cache, OS cache, local DNS server for IP of URL
- once the IP is resolved browser initiate a three-way handshake to connect via TCP
- browser sends the request
- when it receives a response it will render 

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