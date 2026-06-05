export const csFundamentalsData = [
  {
    id: "system-design",
    subject: "System Design",
    icon: "architecture",
    chapters: [
      {
        title: "⚙️ Core Concepts",
        source: "Curated Resources",
        topics: [
          { name: "Scalability", link: "https://algomaster.io/learn/system-design/scalability" },
          { name: "Availability", link: "https://algomaster.io/learn/system-design/availability" },
          { name: "Reliability", link: "https://algomaster.io/learn/system-design/reliability" },
          { name: "SPOF", link: "https://algomaster.io/learn/system-design/single-point-of-failure-spof" },
          { name: "Latency vs Throughput vs Bandwidth", link: "https://algomaster.io/learn/system-design/latency-vs-throughput" },
          { name: "Consistent Hashing", link: "https://algomaster.io/learn/system-design/consistent-hashing" },
          { name: "CAP Theorem", link: "https://algomaster.io/learn/system-design/cap-theorem" },
          { name: "Failover", link: "https://www.druva.com/glossary/what-is-a-failover-definition-and-related-faqs" },
          { name: "Fault Tolerance", link: "https://www.cockroachlabs.com/blog/what-is-fault-tolerance/" }
        ]
      },
      {
        title: "🌐 Networking Fundamentals",
        source: "Curated Resources",
        topics: [
          { name: "OSI Model", link: "https://algomaster.io/learn/system-design/osi" },
          { name: "IP Addresses", link: "https://algomaster.io/learn/system-design/ip-address" },
          { name: "Domain Name System (DNS)", link: "https://blog.algomaster.io/p/how-dns-actually-works" },
          { name: "Proxy vs Reverse Proxy", link: "https://blog.algomaster.io/p/proxy-vs-reverse-proxy-explained" },
          { name: "HTTP/HTTPS", link: "https://algomaster.io/learn/system-design/http-https" },
          { name: "TCP vs UDP", link: "https://algomaster.io/learn/system-design/tcp-vs-udp" },
          { name: "Load Balancing", link: "https://blog.algomaster.io/p/load-balancing-algorithms-explained-with-code" },
          { name: "Checksums", link: "https://algomaster.io/learn/system-design/checksums" }
        ]
      },
      {
        title: "🔌 API Fundamentals",
        source: "Curated Resources",
        topics: [
          { name: "APIs", link: "https://algomaster.io/learn/system-design/what-is-an-api" },
          { name: "API Gateway", link: "https://blog.algomaster.io/p/what-is-an-api-gateway" },
          { name: "REST vs GraphQL", link: "https://blog.algomaster.io/p/rest-vs-graphql" },
          { name: "WebSockets", link: "https://blog.algomaster.io/p/websockets" },
          { name: "Webhooks", link: "https://algomaster.io/learn/system-design/webhooks" },
          { name: "Idempotency", link: "https://algomaster.io/learn/system-design/idempotency" },
          { name: "Rate limiting", link: "https://blog.algomaster.io/p/rate-limiting-algorithms-explained-with-code" },
          { name: "API Design", link: "https://abdulrwahab.medium.com/api-architecture-best-practices-for-designing-rest-apis-bf907025f5f" }
        ]
      },
      {
        title: "🗄️ Database Fundamentals",
        source: "Curated Resources",
        topics: [
          { name: "ACID Transactions", link: "https://algomaster.io/learn/system-design/acid-transactions" },
          { name: "SQL vs NoSQL", link: "https://algomaster.io/learn/system-design/sql-vs-nosql" },
          { name: "Database Indexes", link: "https://algomaster.io/learn/system-design/indexing" },
          { name: "Database Sharding", link: "https://algomaster.io/learn/system-design/sharding" },
          { name: "Data Replication", link: "https://redis.com/blog/what-is-data-replication/" },
          { name: "Database Scaling", link: "https://blog.algomaster.io/p/system-design-how-to-scale-a-database" },
          { name: "Databases Types", link: "https://blog.algomaster.io/p/15-types-of-databases" },
          { name: "Bloom Filters", link: "https://algomaster.io/learn/system-design/bloom-filters" },
          { name: "Database Architectures", link: "https://www.mongodb.com/developer/products/mongodb/active-active-application-architectures/" }
        ]
      },
      {
        title: "⚡ Caching Fundamentals",
        source: "Curated Resources",
        topics: [
          { name: "Caching 101", link: "https://algomaster.io/learn/system-design/what-is-caching" },
          { name: "Caching Strategies", link: "https://algomaster.io/learn/system-design/caching-strategies" },
          { name: "Cache Eviction Policies", link: "https://blog.algomaster.io/p/7-cache-eviction-strategies" },
          { name: "Distributed Caching", link: "https://blog.algomaster.io/p/distributed-caching" },
          { name: "Content Delivery Network (CDN)", link: "https://algomaster.io/learn/system-design/content-delivery-network-cdn" }
        ]
      },
      {
        title: "🔄 Asynchronous Communication",
        source: "Curated Resources",
        topics: [
          { name: "Pub/Sub", link: "https://algomaster.io/learn/system-design/pub-sub" },
          { name: "Message Queues", link: "https://algomaster.io/learn/system-design/message-queues" },
          { name: "Change Data Capture (CDC)", link: "https://algomaster.io/learn/system-design/change-data-capture-cdc" }
        ]
      },
      {
        title: "🧩 Distributed System and Microservices",
        source: "Curated Resources",
        topics: [
          { name: "HeartBeats", link: "https://blog.algomaster.io/p/heartbeats-in-distributed-systems" },
          { name: "Service Discovery", link: "https://blog.algomaster.io/p/service-discovery-in-distributed-systems" },
          { name: "Consensus Algorithms", link: "https://medium.com/@sourabhatta1819/consensus-in-distributed-system-ac79f8ba2b8c" },
          { name: "Distributed Locking", link: "https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html" },
          { name: "Gossip Protocol", link: "http://highscalability.com/blog/2023/7/16/gossip-protocol-explained.html" },
          { name: "Circuit Breaker", link: "https://medium.com/geekculture/design-patterns-for-microservices-circuit-breaker-pattern-276249ffab33" },
          { name: "Disaster Recovery", link: "https://cloud.google.com/learn/what-is-disaster-recovery" },
          { name: "Distributed Tracing", link: "https://www.dynatrace.com/news/blog/what-is-distributed-tracing/" }
        ]
      },
      {
        title: "🖇️ Architectural Patterns",
        source: "Curated Resources",
        topics: [
          { name: "Client-Server Architecture", link: "https://algomaster.io/learn/system-design/client-server-architecture" },
          { name: "Microservices Architecture", link: "https://medium.com/hashmapinc/the-what-why-and-how-of-a-microservices-architecture-4179579423a9" },
          { name: "Serverless Architecture", link: "https://blog.algomaster.io/p/2edeb23b-cfa5-4b24-845e-3f6f7a39d162" },
          { name: "Event-Driven Architecture", link: "https://www.confluent.io/learn/event-driven-architecture/" },
          { name: "Peer-to-Peer (P2P) Architecture", link: "https://www.spiceworks.com/tech/networking/articles/what-is-peer-to-peer/" }
        ]
      },
      {
        title: "⚖️ System Design Tradeoffs",
        source: "Curated Resources",
        topics: [
          { name: "Top 15 Tradeoffs", link: "https://blog.algomaster.io/p/system-design-top-15-trade-offs" },
          { name: "Vertical vs Horizontal Scaling", link: "https://algomaster.io/learn/system-design/vertical-vs-horizontal-scaling" },
          { name: "Concurrency vs Parallelism", link: "https://blog.algomaster.io/p/concurrency-vs-parallelism" },
          { name: "Long Polling vs WebSockets", link: "https://blog.algomaster.io/p/long-polling-vs-websockets" },
          { name: "Batch vs Stream Processing", link: "https://blog.algomaster.io/p/batch-processing-vs-stream-processing" },
          { name: "Stateful vs Stateless Design", link: "https://blog.algomaster.io/p/stateful-vs-stateless-architecture" },
          { name: "Strong vs Eventual Consistency", link: "https://blog.algomaster.io/p/strong-vs-eventual-consistency" },
          { name: "Read-Through vs Write-Through Cache", link: "https://blog.algomaster.io/p/59cae60d-9717-4e20-a59e-759e370db4e5" },
          { name: "Push vs Pull Architecture", link: "https://blog.algomaster.io/p/af5fe2fe-9a4f-4708-af43-184945a243af" },
          { name: "REST vs RPC", link: "https://blog.algomaster.io/p/106604fb-b746-41de-88fb-60e932b2ff68" },
          { name: "Synchronous vs. asynchronous communications", link: "https://blog.algomaster.io/p/aec1cebf-6060-45a7-8e00-47364ca70761" },
          { name: "Latency vs Throughput", link: "https://aws.amazon.com/compare/the-difference-between-throughput-and-latency/" }
        ]
      },
      {
        title: "✅ How to Answer a System Design Interview Problem",
        source: "Curated Resources",
        topics: [
          { name: "How to Answer a System Design Interview Problem", link: "https://algomaster.io/learn/system-design-interviews/answering-framework" }
        ]
      },
      {
        title: "💻 System Design Interview Problems (Easy)",
        source: "Curated Resources",
        topics: [
          { name: "Design URL Shortener like TinyURL", link: "https://algomaster.io/learn/system-design-interviews/design-url-shortener" },
          { name: "Design Autocomplete for Search Engines", link: "https://algomaster.io/learn/system-design-interviews/design-instagram" },
          { name: "Design Load Balancer", link: "https://algomaster.io/learn/system-design-interviews/design-load-balancer" },
          { name: "Design Content Delivery Network (CDN)", link: "https://www.youtube.com/watch?v=8zX0rue2Hic" },
          { name: "Design Parking Garage", link: "https://www.youtube.com/watch?v=NtMvNh0WFVM" },
          { name: "Design Vending Machine", link: "https://www.youtube.com/watch?v=D0kDMUgo27c" },
          { name: "Design Distributed Key-Value Store", link: "https://www.youtube.com/watch?v=rnZmdmlR-2M" },
          { name: "Design Distributed Cache", link: "https://www.youtube.com/watch?v=iuqZvajTOyA" },
          { name: "Design Authentication System", link: "https://www.youtube.com/watch?v=uj_4vxm9u90" },
          { name: "Design Unified Payments Interface (UPI)", link: "https://www.youtube.com/watch?v=QpLy0_c_RXk" }
        ]
      },
      {
        title: "💻 System Design Interview Problems (Medium)",
        source: "Curated Resources",
        topics: [
          { name: "Design WhatsApp", link: "https://algomaster.io/learn/system-design-interviews/design-whatsapp" },
          { name: "Design Spotify", link: "https://algomaster.io/learn/system-design-interviews/design-spotify" },
          { name: "Design Instagram", link: "https://algomaster.io/learn/system-design-interviews/design-instagram" },
          { name: "Design Notification Service", link: "https://algomaster.io/learn/system-design-interviews/design-notification-service" },
          { name: "Design Distributed Job Scheduler", link: "https://blog.algomaster.io/p/design-a-distributed-job-scheduler" },
          { name: "Design Tinder", link: "https://www.youtube.com/watch?v=tndzLznxq40" },
          { name: "Design Facebook", link: "https://www.youtube.com/watch?v=9-hjBGxuiEs" },
          { name: "Design Twitter", link: "https://www.youtube.com/watch?v=wYk0xPP_P_8" },
          { name: "Design Reddit", link: "https://www.youtube.com/watch?v=KYExYE_9nIY" },
          { name: "Design Netflix", link: "https://www.youtube.com/watch?v=psQzyFfsUGU" },
          { name: "Design Youtube", link: "https://www.youtube.com/watch?v=jPKTo1iGQiE" },
          { name: "Design Google Search", link: "https://www.youtube.com/watch?v=CeGtqouT8eA" },
          { name: "Design E-commerce Store like Amazon", link: "https://www.youtube.com/watch?v=EpASu_1dUdE" },
          { name: "Design TikTok", link: "https://www.youtube.com/watch?v=Z-0g_aJL5Fw" },
          { name: "Design Shopify", link: "https://www.youtube.com/watch?v=lEL4F_0J3l8" },
          { name: "Design Airbnb", link: "https://www.youtube.com/watch?v=YyOXt2MEkv4" },
          { name: "Design Rate Limiter", link: "https://www.youtube.com/watch?v=mhUQe4BKZXs" },
          { name: "Design Distributed Message Queue like Kafka", link: "https://www.youtube.com/watch?v=iJLL-KPqBpM" },
          { name: "Design Flight Booking System", link: "https://www.youtube.com/watch?v=qsGcfVGvFSs" },
          { name: "Design Online Code Editor", link: "https://www.youtube.com/watch?v=07jkn4jUtso" },
          { name: "Design an Analytics Platform", link: "https://github.com/ashishps1/awesome-system-design-resources#design-an-analytics-platform" },
          { name: "Design Payment System", link: "https://www.youtube.com/watch?v=olfaBgJrUBI" },
          { name: "Design a Digital Wallet", link: "https://www.youtube.com/watch?v=4ijjIUeq6hE" }
        ]
      },
      {
        title: "💻 System Design Interview Problems (Hard)",
        source: "Curated Resources",
        topics: [
          { name: "Design Location Based Service like Yelp", link: "https://www.youtube.com/watch?v=M4lR_Va97cQ" },
          { name: "Design Uber", link: "https://www.youtube.com/watch?v=umWABit-wbk" },
          { name: "Design Food Delivery App like Doordash", link: "https://www.youtube.com/watch?v=iRhSAR3ldTw" },
          { name: "Design Google Docs", link: "https://www.youtube.com/watch?v=2auwirNBvGg" },
          { name: "Design Google Maps", link: "https://www.youtube.com/watch?v=jk3yvVfNvds" },
          { name: "Design Zoom", link: "https://www.youtube.com/watch?v=G32ThJakeHk" },
          { name: "Design File Sharing System like Dropbox", link: "https://www.youtube.com/watch?v=U0xTu6E2CT8" },
          { name: "Design Ticket Booking System like BookMyShow", link: "https://www.youtube.com/watch?v=lBAwJgoO3Ek" },
          { name: "Design Distributed Web Crawler", link: "https://www.youtube.com/watch?v=BKZxZwUgL3Y" },
          { name: "Design Code Deployment System", link: "https://www.youtube.com/watch?v=q0KGYwNbf-0" },
          { name: "Design Distributed Cloud Storage like S3", link: "https://www.youtube.com/watch?v=UmWtcgC96X8" },
          { name: "Design Distributed Locking Service", link: "https://www.youtube.com/watch?v=v7x75aN9liM" }
        ]
      },{"title":"🧱 OOP Fundamentals","source":"Curated Resources","topics":[{"name":"Classes and Objects","link":"https://algomaster.io/learn/lld/classes-and-objects"},{"name":"Enums","link":"https://algomaster.io/learn/lld/enums"},{"name":"Interfaces","link":"https://algomaster.io/learn/lld/interfaces"},{"name":"Encapsulation","link":"https://algomaster.io/learn/lld/encapsulation"},{"name":"Abstraction","link":"https://algomaster.io/learn/lld/abstraction"},{"name":"Inheritance","link":"https://algomaster.io/learn/lld/inheritance"},{"name":"Polymorphism","link":"https://algomaster.io/learn/lld/polymorphism"}]},{"title":"🔗 Class Relationships","source":"Curated Resources","topics":[{"name":"Association","link":"https://algomaster.io/learn/lld/association"},{"name":"Aggregation","link":"https://algomaster.io/learn/lld/aggregation"},{"name":"Composition","link":"https://algomaster.io/learn/lld/composition"},{"name":"Dependency","link":"https://algomaster.io/learn/lld/dependency"}]},{"title":"🧭 Design Principles","source":"Curated Resources","topics":[{"name":"DRY Principle","link":"https://algomaster.io/learn/lld/dry"},{"name":"YAGNI Principle","link":"https://algomaster.io/learn/lld/yagni"},{"name":"KISS Principle","link":"https://algomaster.io/learn/lld/kiss"},{"name":"SOLID Principles with Pictures","link":"https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898"},{"name":"SOLID Principles with Code","link":"https://blog.algomaster.io/p/solid-principles-explained-with-code"}]},{"title":"🧩 Design Patterns","source":"Curated Resources","topics":[{"name":"Creational","subtopics":[{"name":"Singleton","link":"https://algomaster.io/learn/lld/singleton"},{"name":"Factory Method","link":"https://algomaster.io/learn/lld/factory-method"},{"name":"Abstract Factory","link":"https://algomaster.io/learn/lld/abstract-factory"},{"name":"Builder","link":"https://algomaster.io/learn/lld/builder"},{"name":"Prototype","link":"https://algomaster.io/learn/lld/prototype"}]},{"name":"Structural","subtopics":[{"name":"Adapter","link":"https://algomaster.io/learn/lld/adapter"},{"name":"Bridge","link":"https://algomaster.io/learn/lld/bridge"},{"name":"Composite","link":"https://algomaster.io/learn/lld/composite"},{"name":"Decorator","link":"https://algomaster.io/learn/lld/decorator"},{"name":"Facade","link":"https://algomaster.io/learn/lld/facade"},{"name":"Flyweight","link":"https://algomaster.io/learn/lld/flyweight"},{"name":"Proxy","link":"https://algomaster.io/learn/lld/proxy"}]},{"name":"Behavioral","subtopics":[{"name":"Iterator","link":"https://algomaster.io/learn/lld/iterator"},{"name":"Observer","link":"https://algomaster.io/learn/lld/observer"},{"name":"Strategy","link":"https://algomaster.io/learn/lld/strategy"},{"name":"Command","link":"https://algomaster.io/learn/lld/command"},{"name":"State","link":"https://algomaster.io/learn/lld/state"},{"name":"Template Method","link":"https://algomaster.io/learn/lld/template-method"},{"name":"Visitor","link":"https://algomaster.io/learn/lld/visitor"},{"name":"Mediator","link":"https://algomaster.io/learn/lld/mediator"},{"name":"Memento","link":"https://algomaster.io/learn/lld/memento"},{"name":"Chain of Responsibility","link":"https://algomaster.io/learn/lld/chain-of-responsibility"}]}]},{"title":"🗂️ UML","source":"Curated Resources","topics":[{"name":"Class Diagram","link":"https://algomaster.io/learn/lld/class-diagram"},{"name":"Use Case Diagram","link":"https://algomaster.io/learn/lld/use-case-diagram"},{"name":"Sequence Diagram","link":"https://algomaster.io/learn/lld/sequence-diagram"},{"name":"Activity Diagram","link":"https://algomaster.io/learn/lld/activity-diagram"},{"name":"State Machine Diagram","link":"https://algomaster.io/learn/lld/state-machine-diagram"}]},{"title":"⏱️ Concurrency and Multi-threading Concepts","source":"Curated Resources","topics":[{"name":"Introduction to Concurrency","link":"https://algomaster.io/learn/concurrency-interview/introduction-to-concurrency"},{"name":"Concurrency vs Parallelism","link":"https://algomaster.io/learn/concurrency-interview/concurrency-vs-parallelism"},{"name":"Processes vs Threads","link":"https://algomaster.io/learn/concurrency-interview/processes-vs-threads"},{"name":"Thread Lifecycle and States","link":"https://algomaster.io/learn/concurrency-interview/thread-lifecycle-and-states"},{"name":"Race Conditions and Critical Sections","link":"https://algomaster.io/learn/concurrency-interview/race-conditions-and-critical-sections"},{"name":"Mutex","link":"https://algomaster.io/learn/concurrency-interview/mutex"},{"name":"Semaphores","link":"https://algomaster.io/learn/concurrency-interview/semaphores"},{"name":"Condition Variables","link":"https://algomaster.io/learn/concurrency-interview/condition-variables"},{"name":"Deadlock","link":"https://algomaster.io/learn/concurrency-interview/deadlock"},{"name":"Thread Pool Pattern","link":"https://algomaster.io/learn/concurrency-interview/thread-pool-pattern"},{"name":"Producer-Consumer Pattern","link":"https://algomaster.io/learn/concurrency-interview/producer-consumer-pattern"}]},{"title":"💻 Low Level Design Interview Problems (Easy)","source":"Curated Resources","topics":[{"name":"Design Parking Lot","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/parking-lot.md"},{"name":"Design Stack Overflow","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/stack-overflow.md"},{"name":"Design a Vending Machine","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/vending-machine.md"},{"name":"Design Logging Framework","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/logging-framework.md"},{"name":"Design Coffee Vending Machine","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/coffee-vending-machine.md"}]},{"title":"💻 Low Level Design Interview Problems (Medium)","source":"Curated Resources","topics":[{"name":"Design ATM","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/atm.md"},{"name":"Design LinkedIn","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/linkedin.md"},{"name":"Design LRU Cache","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/lru-cache.md"},{"name":"Design Tic Tac Toe Game","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/tic-tac-toe.md"},{"name":"Design an Elevator System","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/elevator-system.md"},{"name":"Design a Social Network like Facebook","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/social-networking-service.md"}]},{"title":"💻 Low Level Design Interview Problems (Hard)","source":"Curated Resources","topics":[{"name":"Design CricInfo","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/cricinfo.md"},{"name":"Design Splitwise","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/splitwise.md"},{"name":"Design Chess Game","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/chess-game.md"},{"name":"Design Ride-Sharing Service like Uber","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/ride-sharing-service.md"},{"name":"Design Online Shopping System like Amazon","link":"https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/online-shopping-service.md"}]}
    ]
  },
  {
    id: "os",
    subject: "Operating Systems (OS)",
    icon: "cpu",
    chapters: [
      {
        title: "🖥️ Introduction & Process Management",
        source: "Curated Resources",
        topics: [
          { name: "Introduction to OS", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2001%20-%20Introduction%20to%20OS.md" },
          { name: "Process states and Process Control Block (PCB)", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2002%20-%20Process%20Management.md#process-management" },
          { name: "Process vs Threads", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2002%20-%20Process%20Management.md#process-vs-thread" },
          { name: "User Level Thread vs Kernel Level Thread", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2002%20-%20Process%20Management.md#user-level-thread-vs-kernel-level-thread" },
          { name: "Context Switching", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2002%20-%20Process%20Management.md#context-switching" },
          { name: "Inter-Process Communication (IPC)", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2002%20-%20Process%20Management.md#inter-process-communication" }
        ]
      },
      {
        title: "⏱️ CPU Scheduling",
        source: "Curated Resources",
        topics: [
          { name: "Scheduling Criteria & Times (Arrival, Burst, Turnaround, Waiting)", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2003%20-%20CPU%20Scheduling.md#scheduling-times" },
          { name: "First Come First Serve (FCFS)", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2003%20-%20CPU%20Scheduling.md#1-first-come-first-serve-fcfs" },
          { name: "Shortest Job First (SJF) & SRTF", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2003%20-%20CPU%20Scheduling.md#2-shortest-job-first-sjf" },
          { name: "Round Robin (RR)", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2003%20-%20CPU%20Scheduling.md#4-round-robin-rr" },
          { name: "Priority Scheduling", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2003%20-%20CPU%20Scheduling.md#3-priority-scheduling" },
          { name: "Multi-level Queue & Feedback Queue", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2003%20-%20CPU%20Scheduling.md#5-multilevel-queue-scheduling" }
        ]
      },
      {
        title: "🚦 Process Synchronization & Deadlocks",
        source: "Curated Resources",
        topics: [
          { name: "Race Condition & Critical Section Problem", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2004%20-%20Process%20Synchronization.md#critical-section" },
          { name: "Mutex Locks", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2004%20-%20Process%20Synchronization.md#mutex" },
          { name: "Semaphores (Binary vs Counting)", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2004%20-%20Process%20Synchronization.md#semaphore" },
          { name: "Producer-Consumer & Reader-Writer Problem", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2004%20-%20Process%20Synchronization.md#classical-problems-of-synchronization" },
          { name: "Deadlock Characterization & Coffman Conditions", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2005%20-%20Deadlocks.md#deadlock-characterization" },
          { name: "Deadlock Prevention & Avoidance (Banker's Algorithm)", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2005%20-%20Deadlocks.md#bankers-algorithm" }
        ]
      },
      {
        title: "💾 Memory Management",
        source: "Curated Resources",
        topics: [
          { name: "Logical vs Physical Address Space", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2006%20-%20Memory%20Management.md#logical-vs-physical-address" },
          { name: "Contiguous Memory Allocation & Fragmentation", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2006%20-%20Memory%20Management.md#fragmentation" },
          { name: "Paging & Page Tables", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2006%20-%20Memory%20Management.md#paging" },
          { name: "Segmentation", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2006%20-%20Memory%20Management.md#segmentation" },
          { name: "Virtual Memory & Demand Paging", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2007%20-%20Virtual%20Memory.md#virtual-memory" },
          { name: "Page Replacement Algorithms (FIFO, LRU, Optimal)", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2007%20-%20Virtual%20Memory.md#page-replacement-algorithms" },
          { name: "Thrashing", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2007%20-%20Virtual%20Memory.md#thrashing" }
        ]
      },
      {
        title: "💽 Disk Scheduling & File Systems",
        source: "Curated Resources",
        topics: [
          { name: "Disk Structure", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2008%20-%20Disk%20Scheduling.md" },
          { name: "Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN)", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2008%20-%20Disk%20Scheduling.md#disk-scheduling-algorithms" },
          { name: "File System Concepts & Access Methods", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2009%20-%20File%20System.md" },
          { name: "Directory Structure", link: "https://github.com/manishkumar8312/CS-Fundamentals/blob/master/Operating%20System/Ch%2009%20-%20File%20System.md#directory-structure" }
        ]
      }
    ]
  },
  {
    id: "cn",
    subject: "Computer Networks (CN)",
    icon: "globe",
    chapters: [
      {
        title: "🌐 Introduction to Networking",
        source: "Curated Resources",
        topics: [
          { name: "What is a Computer Network?", link: "https://www.geeksforgeeks.org/basics-computer-networking/" },
          { name: "Network Topologies (Star, Ring, Mesh, etc.)", link: "https://www.geeksforgeeks.org/types-of-network-topology/" },
          { name: "Types of Networks (LAN, MAN, WAN)", link: "https://www.geeksforgeeks.org/types-of-area-networks-lan-man-and-wan/" },
          { name: "Network Devices (Hub, Switch, Router, Gateway)", link: "https://www.geeksforgeeks.org/network-devices-hub-repeater-bridge-switch-router-gateways-and-brouter/" }
        ]
      },
      {
        title: "🏗️ Network Models",
        source: "Curated Resources",
        topics: [
          { name: "OSI Model (7 Layers)", link: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/" },
          { name: "TCP/IP Model (4 Layers)", link: "https://www.geeksforgeeks.org/tcp-ip-model/" },
          { name: "Differences between OSI and TCP/IP", link: "https://www.geeksforgeeks.org/difference-between-osi-and-tcp-ip-reference-model/" }
        ]
      },
      {
        title: "🔗 Data Link & Network Layers",
        source: "Curated Resources",
        topics: [
          { name: "MAC Addresses and ARP", link: "https://www.geeksforgeeks.org/how-address-resolution-protocol-arp-works/" },
          { name: "Error Detection (Parity, Checksum, CRC)", link: "https://www.geeksforgeeks.org/error-detection-in-computer-networks/" },
          { name: "IPv4 vs IPv6", link: "https://www.ibm.com/think/topics/ipv4-vs-ipv6" },
          { name: "Subnetting and Classless Inter-Domain Routing (CIDR)", link: "https://aws.amazon.com/what-is/cidr/" },
          { name: "Routing Protocols (OSPF, BGP, RIP)", link: "https://www.cloudflare.com/learning/network-layer/what-is-routing/" }
        ]
      },
      {
        title: "🚚 Transport Layer",
        source: "Curated Resources",
        topics: [
          { name: "TCP vs UDP", link: "https://www.cloudflare.com/learning/ddos/glossary/tcp-vs-udp/" },
          { name: "TCP 3-Way Handshake", link: "https://www.geeksforgeeks.org/tcp-3-way-handshake-process/" },
          { name: "Congestion Control in TCP", link: "https://www.geeksforgeeks.org/tcp-congestion-control/" },
          { name: "Ports and Sockets", link: "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/" }
        ]
      },
      {
        title: "🌍 Application Layer",
        source: "Curated Resources",
        topics: [
          { name: "HTTP and HTTPS", link: "https://www.cloudflare.com/learning/ssl/what-is-https/" },
          { name: "Domain Name System (DNS)", link: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
          { name: "DHCP", link: "https://www.geeksforgeeks.org/dynamic-host-configuration-protocol-dhcp/" },
          { name: "WebSockets vs Polling", link: "https://ably.com/topic/websockets-vs-long-polling" }
        ]
      }
    ]
  },
  {
    id: "dbms",
    subject: "Database Management Systems (DBMS)",
    icon: "database",
    chapters: [
      {
        title: "🗄️ Database Architecture & Modeling",
        source: "Curated Resources",
        topics: [
          { name: "What is DBMS? (File System vs DBMS)", link: "https://www.geeksforgeeks.org/difference-between-file-system-and-dbms/" },
          { name: "DBMS Architecture (1-tier, 2-tier, 3-tier)", link: "https://www.geeksforgeeks.org/dbms-architecture/" },
          { name: "Data Independence (Logical & Physical)", link: "https://www.javatpoint.com/data-independence-in-dbms" },
          { name: "Entity-Relationship (ER) Model", link: "https://www.geeksforgeeks.org/introduction-of-er-model/" }
        ]
      },
      {
        title: "🔐 Relational Model & Normalization",
        source: "Curated Resources",
        topics: [
          { name: "Keys in DBMS (Primary, Foreign, Candidate, Super)", link: "https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/" },
          { name: "Anomalies in DBMS", link: "https://www.geeksforgeeks.org/anomalies-in-relational-model/" },
          { name: "Normalization (1NF, 2NF, 3NF, BCNF)", link: "https://www.geeksforgeeks.org/introduction-of-database-normalization/" },
          { name: "Functional Dependencies", link: "https://www.javatpoint.com/dbms-functional-dependency" }
        ]
      },
      {
        title: "🔄 Transactions & Concurrency Control",
        source: "Curated Resources",
        topics: [
          { name: "ACID Properties", link: "https://www.ibm.com/think/topics/acid-properties" },
          { name: "Transaction States", link: "https://www.geeksforgeeks.org/transaction-states-in-dbms/" },
          { name: "Schedules (Serializability & Recoverability)", link: "https://www.geeksforgeeks.org/types-of-schedules-in-dbms/" },
          { name: "Concurrency Control Protocols (Lock-based, Time-stamp)", link: "https://www.geeksforgeeks.org/concurrency-control-protocols-in-dbms/" },
          { name: "Deadlock in DBMS", link: "https://www.geeksforgeeks.org/deadlock-in-dbms/" }
        ]
      },
      {
        title: "🔍 Indexing & SQL",
        source: "Curated Resources",
        topics: [
          { name: "Indexing in Databases", link: "https://www.geeksforgeeks.org/indexing-in-databases-set-1/" },
          { name: "B-Trees and B+ Trees", link: "https://www.geeksforgeeks.org/introduction-of-b-tree-2/" },
          { name: "SQL vs NoSQL", link: "https://aws.amazon.com/relational-database/sql-vs-nosql/" },
          { name: "SQL Joins (Inner, Left, Right, Full)", link: "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/" }
        ]
      }
    ]
  },
  {
    id: "oops",
    subject: "Object-Oriented Programming (OOPS)",
    icon: "code",
    chapters: [
      {
        title: "📚 Introduction to OOPs",
        source: "Curated Resources",
        topics: [
          { name: "Procedural vs Object Oriented Programming", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs" },
          { name: "Classes and Objects", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#class-and-object" },
          { name: "Constructors and Destructors", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#constructor" },
          { name: "Access Modifiers", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#access-modifiers" }
        ]
      },
      {
        title: "🏛️ The 4 Pillars of OOPs",
        source: "Curated Resources",
        topics: [
          { name: "Encapsulation", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#encapsulation" },
          { name: "Abstraction", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#abstraction" },
          { name: "Inheritance", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#inheritance" },
          { name: "Types of Inheritance", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#types-of-inheritance" },
          { name: "Polymorphism", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#polymorphism" },
          { name: "Compile-time vs Runtime Polymorphism", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#compile-time-polymorphism-vs-run-time-polymorphism" }
        ]
      },
      {
        title: "⚙️ Advanced OOPs Concepts",
        source: "Curated Resources",
        topics: [
          { name: "Abstract Classes vs Interfaces", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#abstract-class-vs-interface" },
          { name: "Method Overloading vs Overriding", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#method-overloading-vs-method-overriding" },
          { name: "Static Keyword", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#static-keyword" },
          { name: "Final / Const Keyword", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#final-keyword" },
          { name: "Virtual Functions", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#virtual-function" },
          { name: "Friend Class and Friend Function", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#friend-class" }
        ]
      },
      {
        title: "🧭 Object-Oriented Design (SOLID)",
        source: "Curated Resources",
        topics: [
          { name: "Single Responsibility Principle (SRP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#single-responsibility-principle" },
          { name: "Open/Closed Principle (OCP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#openclosed-principle" },
          { name: "Liskov Substitution Principle (LSP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#liskov-substitution-principle" },
          { name: "Interface Segregation Principle (ISP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#interface-segregation-principle" },
          { name: "Dependency Inversion Principle (DIP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#dependency-inversion-principle" }
        ]
      }
    ]
  }
];
