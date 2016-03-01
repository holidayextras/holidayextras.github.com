---
layout: post
title: Micro-services and configuration, a different approach.
categories: NodeJS
author: kevin_hodges
tags: microservices, document store, couchdb, pouchdb, configuration management
comments: true
---

Moving to a micro-services architecture is the dream right? We’ve been breaking up our monolith at HX for a few years now and winning in all sorts of areas such as better code reuse, greater decoupling of functionality and quicker release cycles. We did very quickly however come a cross an elephant in the room that no one wanted to talk about. It was a by-product of our micro-services journey and things got complicated very quickly.

> Config.

On the monolith it was pretty straightforward. It’s all in one place and "on box". Now we’ve got many boxes all doing different things that are in different parts of the world, keeping configuration consistent and available across them all is a bit of a headache, especially as you want to keep a [single source of truth](https://en.wikipedia.org/wiki/Single_Source_of_Truth).

There were a few architectural points we had to guarantee when looking for a config solution.

1. Services can't go “off box” for it. Round trips to other services can be expensive (http/latency), especially for high volume calls such as configuration.
2. We have to have a single source of truth.
3. It needs to be editable and changes made available in real time (no deploying of services to see the updates).

The solution we came up with is simple and quite elegant. Hosted CouchDB as the central store and [PouchDB](http://pouchdb.com/) running on every service.

We took [Cloudant](https://cloudant.com) off the shelf and gave them some money, we don’t want to be writing anything that other people can do faster and better, we also love their "data as a service" view of things. All our config is JSON and no where near “relational” so a document store suits this model well. It also has a tidy interface to allow people to make changes to config easily. We then use PouchDB as an npm module on the server. Each service when it boots up fires up our configuration module which is a simple Pouch wrapper. Pouch takes care of the sync'ing which ensures that if changes are made in Cloudant, they are immediately pulled down to maintain a complete config set. A byproduct of this is, if for some reason Cloudant becomes unavailable, a copy of the configuration is in memory to ensure services can continue to operate.

We’ve been running in production with this for over a year now and starting to scale up and have had zero problems with availability. The main task is keeping JSON configs well organised. We don’t have the luxury of nested directories to group configuration as our document store provides a simple flat structure so ensuring that remains tidy and visible is something we’re working hard on with documentation and peer reviews.
