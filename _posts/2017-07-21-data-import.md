---		
 layout: post		
 title: Optimising Rates Data Imports - a Case Study		
 categories: Programming		
 author: caroline_woodhams		
 tags: problem solving, microservice, Google, data, rates, architecture		
 comments: true		
 hero: "/markus-spiske-37931.jpg"		
 promoted: true		
 excerpt: A case study examining how we used Google tech and microservices to solve the problem of importing and processing rates data.		
---	
 		
## The problem:		
We were using a heavily manual method for importing some of our pricing data into our systems. This method was inefficient, taking on average a couple of hours end to end to complete, and was vulnerable to errors in processing. We sought to improve this process, with the benefits of:		
 		
- Reducing the time it takes for new rates to be available to our customers;		
- Reducing the errors incurred through the process, so prices are accurate;		
- Releasing the Commercial team’s time so they can focus on value-add activities for the business.		
 		
## The solution:		
Using a suite of Google technologies and adopting a microservices approach we were able to implement a full end to end data event driven solution. The steps in the new process are as follows:		
 		
1) Rates data is posted to a **Google Cloud storage bucket**. This has the advantage of making the data available to multiple teams throughout the business who may wish to query it for a range of purposes, with the caveat that the data stored is in its raw form.		
 		
2) A **Google Cloud Function** creates a supplier price event for each rate change, which is sent to a **Google pub/sub queue**. The supplier price event is structured according to a schema we designed to standardise how data passes through our pipeline.		
 		
3) The first pub/sub topic sends the supplier price event to our *Price Transformer*, a microservice that matches the supplier’s product code with our own internal product codes to create a product price event. This is so we know we’re updating the right product with the right rate downstream!		
 		
4) The product price event is then sent onto another pub/sub topic, where it can be subscribed to by multiple services. Currently, there are three subscriptions at this stage: a historical data store (so we can query past data), an operational data store (which can be accessed by internal services such as Search API) and our *Extranet Price Processor* microservice.		
 		
5) The Extranet Price Processor listens for new pricing events, and when one is found that it is interested in, it sends this message onto the Extranet. The Extranet is a portal we have opened to a restricted group of suppliers, which they can use to manage their own rates. We are using the Extranet in this solution as one of the functions it performs is to create a file and send it to a SFTP for upload into our reservation system, where prices are currently held and queried by internal APIs.		
 		
6) Once the rate change has been imported from the file produced by the Extranet - and subject to web caching - the price will appear on our site when a customer makes a search.		
 		
This process, now optimised, takes about 20 minutes to complete - reducing the time it takes end to end by about 80%.		
 		
## Learnings:		
In shipping this solution we came across a few ‘gotchas’, that we quickly learnt from and rectified. Some of our key learnings were:		
 		
### Feedback loop		
It is important that our Commercial team are kept informed at key stages in the rates updating process, such as when rate changes have been received, and when they have been processed. We have built in feedback loops using [SumoLogic](https://www.sumologic.com/), which sends alerts once key actions have completed.		
 		
### Launch process		
For our first rates data import, it’s fair to say we were a little complacent around the complexity to switch to this new process from the well established version. Because of the risk (prices not appearing on our site) it required close collaboration with Commercial to ensure that the switch was made seamlessly, and we had to ensure we had a roll back plan if anything went wrong.  		
 		
On the agreed day we launched out of hours, with a colleague from Commercial on site to help us with testing. We developed a checklist as a guide covering both the technical and operational steps we needed to take for future launches.		
 		
### Logging, Alerting and Reporting		
Here is where SumoLogic has been an extremely valuable tool. We were able to log each part of the process so we could see how they were performing. This is key when moving to microservices and pub/sub topics - if one step fails you want to quickly identify where, not waste minutes tracing it through the stack.		
 		
From SumoLogic we could also set up alerts when things failed, and report on the system performance at both micro- and macro-level. We set up performance dashboards that display system health, which are useful as we scale the data the system is handling.		
 		
## What's next?		
 		
We are in the process of rolling this solution out to more data imports, now we have confidence that it is working as expected. In order to scale this solution, we will also need to develop some functionality around how we handle changes in availability, as this is often processed at the same time as rates changes.		
