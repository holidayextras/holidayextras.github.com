---
layout: post
title: React, in a state of confusion
categories: programming
author: luke_hansell
tags: react programming state backbone
comments: true
excerpt: "Components should be stateless. Stateless where possible. Push state higher up the dependency tree. But what happens when you get to the top of the tree?"
---

We follow design principles with React to make them as composable and encapsulated as possible. To enable this we have a few guidelines which Facebook themselves promote:
- Components should be stateless
- Stateless where possible
- Push state higher up the dependency tree

All great points, but what happens when you get to the top of the tree? Where do you push state to then?

We saw this problem with our backbone app and it caused some confusion. 
Our "state" is held in backbone models, what do we do about managing the state here and passing it in to our React components? Well, luckily for us React is smart about this.

Consider the following:

We have a variable called `clickCount`.

    var clickCount = 0



We have a React component which renders `clickCount`.

    var Component = React.createClass({
      render: function() {
        return <button>{this.props.clickCount}</button>
      }
    })



So we pass `clickCount` in to our Component when we render it.

    React.render(<Component clickCount={clickCount} />, document.body)



Now we want our clickCount to increase on click. So in our component:

    render: function() {
      return <button onClick={this.props.onClickHandler}>{this.props.clickCount}</button>
    }



And outside our component we add a clickHandler

    clickHandler = function() {
      clickCount += 1
    }



And we pass this clickHandler to our component

    React.render(<Component clickCount={clickCount} onClickHandler={clickHandler} />, document.body)



But wait! Our component doesn't re-render when we click and our UI is out of date with our state! :astonished:


To rectify this situation we'll put our rendering inside a function.

    update = function() {
      React.render(<Component clickCount={clickCount} onClickHandler={clickHandler} />, document.body)
    }
    update()



We call `update()` straight away as we want it to render on start up, we then also add a call to `update` in our click handler.

    clickHandler = function() {
      clickCount += 1
      update()
    }



There we go! Now our UI updates with our state and our state is held outside of our component. If, as was mentioned at the start, we are listening to a backbone application we can tie the `update()` method (the React rendering) to the `listenTo` callbacks for our models/UI etc.

Since React keeps a reference to the previous DOM state in the Virtual DOM it computes the difference in the current and next DOM trees and only updates the elements that are necessary. This way you get the speed boost of React rendering within your existing application.

[You can view the complete example in this JSFiddle](https://jsfiddle.net/lukehansell/8c1vgcem/1/)

Just think, React Router already does this. The state which causes the re-render is stored in the url! `Router.run` listens for changed in this and calls the callback again with the new state in which we usually provide a `React.render` call.
