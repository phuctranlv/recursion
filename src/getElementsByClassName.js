// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    // your code here

    var currentNode = this;
    if (this.document) {
      var currentNode = document.body;
    }

    var children = currentNode.childNodes;

    if (currentNode.classList) {
      if (currentNode.classList.value.includes(className)) {
        if (this.document && children) {
          var theFirstOneHasIt = currentNode;
        } else if (!this.document && children.length === 0) {
          return currentNode;
        } else if (!this.document) {
          var hasChildrenButAlsoHasClass = currentNode;
        }
      }
    }

    if (children) {
      var outputArray = [];
      if (theFirstOneHasIt) {
        outputArray.push(theFirstOneHasIt);
      }
      if (hasChildrenButAlsoHasClass) {
        outputArray.push(hasChildrenButAlsoHasClass);
      }
      for (var i = 0; i < children.length; i++) {
        var result = getElementsByClassName.call(children[i], className);
        if (result !== undefined) {
          outputArray.push(result);
        }
      }
      return outputArray.flat(Infinity)
    }

  };
