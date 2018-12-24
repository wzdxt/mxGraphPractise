//require("@epicfaace/mxgraph/.../css/common.css");

const mx = require("@epicfaace/mxgraph")({
  mxBasePath: "./mxgraph"
});


const container = document.getElementById('mxGraph');

if (!mx.mxClient.isBrowserSupported())
{
  // Displays an error message if the browser is not supported.
  mx.mxUtils.error('Browser is not supported!', 200, false);
}

var model = new mx.mxGraphModel();
var graph = new mx.mxGraph(container, model);
// graph.setEnabled(false);

// Gets the default parent for inserting new cells. This
// is normally the first child of the root (ie. layer 0).
var parent = graph.getDefaultParent();

// Adds cells to the model in a single step
model.beginUpdate();
try
{
  var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30, 'rounded;strokeColor=red;fillColor=green');
  var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
  var e1 = graph.insertEdge(parent, null, '', v1, v2);
}
finally
{
  // Updates the display
  model.endUpdate();
}

graph.getView().invalidate().validate();
