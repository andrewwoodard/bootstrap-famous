/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var HeaderFooterLayout = require("famous/views/HeaderFooterLayout");
var GridLayout = require("famous/views/GridLayout");
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var stateModifier = new StateModifier({
  transform: Transform.translate(10, 0, 0)
});

var bootsymbol = new Surface({
 size: [, 80],
 content: '<h1>Bootstap Famo.us</h1>',
   properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

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
  mainContext.add(stateModifier).add(bootsymbol);
}

function addHeader() {
  layout.header.add(new Surface({
    content: "",
    classes: ["grey-bg"],
    properties: {
      lineHeight: "70px",
      textAlign: "center"
    }
  }));
}

function addContent() {
  layout.content.add(new Surface({
    content: "B F",
    properties: {
      lineHeight: "70px",
      background : 'clear',
      textAlign: "center"
    }
  }));
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
