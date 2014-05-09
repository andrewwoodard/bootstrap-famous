/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var HeaderFooterLayout = require("famous/views/HeaderFooterLayout");
var GridLayout = require("famous/views/GridLayout");

var mainContext = Engine.createContext();

var layout;

createLayout();
addHeader();
addContent();
addFooter();

function createLayout() {
  layout = new HeaderFooterLayout({
    headerSize: 70,
    footerSize: 50
  });

  mainContext.add(layout);
}

function addHeader() {
  layout.header.add(new Surface({
    content: "Header",
    classes: ["grey-bg"],
    properties: {
      lineHeight: "70px",
      textAlign: "center"
    }
  }));
}

function addContent() {
  layout.content.add(createGrid( 'content', [2, 1] ));
}

function addFooter() {
  layout.footer.add(createGrid( 'footer', [3, 1] ));
}

function createGrid( section, dimensions ) {
  var grid = new GridLayout({
    dimensions: dimensions
  });
  
  var surfaces = [];
  grid.sequenceFrom(surfaces);
  
  for(var i = 0; i < dimensions[0]; i++) {
    surfaces.push(new Surface({
      content: section + ' ' + (i + 1),
      size: [undefined, undefined],
      properties: {
        backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
        color: "#404040",
        textAlign: 'center'
      }
    }));
  }
  
  return grid;
}
});
