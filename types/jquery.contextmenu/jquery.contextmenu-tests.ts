'// http://swisnl.github.io/jQuery-contextMenu/docs.html

/// <reference types="jquery.contextmenu" />

//Disable a contextMenu trigger
$(".some-selector").contextMenu(false);

//Manually show a contextMenu
$(".some-selector").contextMenu();
$(".some-selector").contextMenu({x: 123, y: 123});

//Manually hide a contextMenu
$(".some-selector").contextMenu("hide");

//Unregister contextMenu
$.contextMenu('destroy', ".some-selector");

//Unregister all contextMenus
$.contextMenu('destroy');

$.contextMenu({selector: '.context-menu'});

$.contextMenu({
    selector: '.context-menu',
    items: {
        "copy": {
            name: "Copy",
			callback: function(e, key){
                alert("Clicked on " + key);
            }
        }
    }
});


// select the container with a selector
$.contextMenu({
    selector: 'span.context-menu',
    appendTo: 'div#context-menus-container'
});

// select the container with a dom element
var element = document.getElementById('context-menus-container');
$.contextMenu({
    selector: 'span.context-menu',
    appendTo: element
});

// trigger with left mouse button
$.contextMenu({
    selector: 'span.context-menu',
    trigger: 'left'
});

// trigger on hover
$.contextMenu({
    selector: 'span.context-menu',
    trigger: 'hover'
});

// selectableSubMenu
$.contextMenu({
    selector: 'span.context-menu',
    selectableSubMenu: true
});

// reposition
$.contextMenu({
    selector: 'span.context-menu',
    reposition: false
});

$.contextMenu({
    selector: 'span.context-menu',
    delay: 500
});

$.contextMenu({
    selector: 'span.context-menu',
    autoHide: true
});

$.contextMenu({
    selector: 'span.context-menu',
    animation: {duration: 250, show: 'fadeIn', hide: 'fadeOut'}
});





$.contextMenu({
    selector: 'span.context-menu',
    events: {
       show : function(e, options){
            // Show an alert with the selector of the menu
            if( confirm('Open menu with selector ' + options.selector + '?') === true ){
                return true;
            } else {
                // Prevent the menu to be shown.
                return false;
            }            
       },
       hide : function(e, options){
           if( confirm('Hide menu with selector ' + options.selector + '?') === true ){
               return true;
           } else {
               // Prevent the menu to be hidden.
               return false;
           }            
       },
       activated : function(e, options){
               if( confirm('Hide menu with selector ' + options.selector + '?') === true ){
               console.log('Menu Activated');
           }            
       }
	}
});

$.contextMenu({
    selector: 'span.context-menu',
    position: function(e, opt, x, y){
        opt.$menu.css({top: 123, left: 123});
    } 
});

$.contextMenu({
    selector: 'span.context-menu',
    determinePosition: function($menu){
        
    }
});

$.contextMenu({
    selector: 'span.context-menu',
    build: function(e, $currentTrigger){
        return {
            callback: function(){},
            items: {
                "menuItem": {
					"name": "My on demand menu item"
				}
            }
        };
    }
});

$.contextMenu({
	selector: '.context-menu-one', 
	callback: function() {                
	},
	items: {
		"edit": {name: "Edit", icon: "edit"},
		"cut": {name: "Cut", icon: "cut"},
		"copy": {name: "Copy", icon: "copy"},
		"paste": {name: "Paste", icon: "paste"},
		"delete": {name: "Delete", icon: "delete"},
		"sep1": "---------"                
	}
});

function createSomeMenu() {
	return {
		callback: function(e: JQuery.Event, key: string, currentMenuData: JQueryContextMenu.ContextMenuData, rootMenuData: JQueryContextMenu.ContextMenuData) {
			var m = "clicked: " + key;
			window.console && console.log(m) || alert(m);
		},
		items: {
			"edit": {name: "Edit", icon: "edit"},
			"cut": {name: "Cut", icon: "cut"},
			"copy": {name: "Copy", icon: "copy"}
		}
	};
}

// some asynchronous click handler
$('.context-menu-one').on('mouseup', function(e){
	var $this = $(this);
	// store a callback on the trigger
	$this.data('runCallbackThingie', createSomeMenu);
	var _offset = $this.offset(),
		position = {
			x: _offset.left + 10, 
			y: _offset.top + 10
		}
	// open the contextMenu asynchronously
	setTimeout(function(){ $this.contextMenu(position); }, 1000);
});

// setup context menu
$.contextMenu({
	selector: '.context-menu-one',
	trigger: 'none',
	build: function(e, $trigger) {
		e.preventDefault();

		// pull a callback from the trigger
		return $trigger.data('runCallbackThingie')();
	}
});

$.contextMenu({
	selector: '.context-menu-one', 
	callback: function(e, key, currentMenuData, rootMenuData) {
		var m = "clicked: " + key;
		window.console && console.log(m) || alert(m); 
	},
	items: {
		"edit": {
			name: "Closing on Click", 
			icon: "edit", 
			callback: function(){ return true; }
		},
		"cut": {
			name: "Open after Click", 
			icon: "cut", 
			callback: function(){ return false; }
		}
	}
});

/**************************************************
 * Context-Menu with Sub-Menu
 **************************************************/
$.contextMenu({
	selector: '.context-menu-one', 
	callback: function(e, key, currentMenuData, rootMenuData) {
		var m = "clicked: " + key;
		window.console && console.log(m) || alert(m); 
	},
	items: {
		"edit": {"name": "Edit", "icon": "edit"},
		"cut": {"name": "Cut", "icon": "cut"},
		"sep1": "---------",
		"quit": {"name": "Quit", "icon": "quit"},
		"sep2": "---------",
		"fold1": {
			"name": "Sub group", 
			"items": {
				"fold1-key1": {"name": "Foo bar"},
				"fold2": {
					"name": "Sub group 2", 
					"items": {
						"fold2-key1": {"name": "alpha"},
						"fold2-key2": {"name": "bravo"},
						"fold2-key3": {"name": "charlie"}
					}
				},
				"fold1-key3": {"name": "delta"}
			}
		},
		"fold1a": {
			"name": "Other group", 
			"items": {
				"fold1a-key1": {"name": "echo"},
				"fold1a-key2": {"name": "foxtrot"},
				"fold1a-key3": {"name": "golf"}
			}
		}
	}
});

// Disabled Callback
$.contextMenu({
	selector: '.context-menu-one', 
	callback: function(e, key, currentMenuData, rootMenuData) {
		var m = "clicked: " + key;
		window.console && console.log(m) || alert(m); 
	},
	items: {
		"edit": {
			name: "Clickable", 
			icon: "edit", 
			disabled: function(e, key, currentMenuData, rootMenuData){ return false; }
		},
		"cut": {
			name: "Disabled", 
			icon: "cut", 
			disabled: function(e, key, currentMenuData, rootMenuData){ return true; }
		}
	}
});