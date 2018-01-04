// Type definitions for jQuery contextMenu 3.0.0-beta.1
// Project: http://swisnl.github.com/jQuery-contextMenu/
// Definitions by: Björn Brala <https://github.com/bbrala>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />


declare global {
    /**
     * @class jQuery.contextMenu
     * @function external:jQuery.contextMenu
     * @instance
     *
     * @param {ContextMenuOperationsEnum} operation
     * @param {ContextMenuOptions} options
     *
     * @property {ContextMenu} manager
     * @property {getInputValues} getInputValues
     * @property {setInputValues} setInputValues
     * @property {fromMenu} ContextMenuHtml5Builder#fromMenu
     * @property {ContextMenuOptions} defaults
     * @property {ContextMenuEventHandler} handle
     * @property {ContextMenuOperations} operations
     * @property {Object<string, ContextMenuData>} menus
     */
    interface JQueryStatic {
        contextMenu(options?: JQueryContextMenu.ContextMenuOptions): JQuery;

        contextMenu(operation: string, options?: JQueryContextMenu.ContextMenuOptions): JQuery;

        contextMenu(operation: string, selector?: string): JQuery;

    }

    interface JQuery {
        contextMenu(options?: string | boolean | { x: number, y: number, button?: string }): JQuery;
    }

    /**
     * @constructor
     * @constructs ContextMenu
     * @classdesc The ContextMenu is the core class that manages contextmenu's. You can call this class directly and skip going through jQuery.
     * @class ContextMenu
     * @example
     * // You can call this class directly and skip going through jQuery, although it still requires jQuery to run.
     * const manager = new ContextMenu();
     * manager.execute("create", options);
     * @property {ContextMenuOptions|Object} defaults
     * @property {ContextMenuEventHandler} handle
     * @property {ContextMenuOperations} operations
     * @property {Object<string, ContextMenuData>} menus
     * @property {number} counter - Internal counter to keep track of different menu's on the page.
     * @property {boolean} initialized - Flag the menu as initialized.
     */
    class ContextMenu {
        defaults: JQueryContextMenu.ContextMenuOptions;
        handle: JQueryContextMenu.ContextMenuEventHandler;
        operations: JQueryContextMenu.ContextMenuOperations;
        menus: { [key: string]: JQueryContextMenu.ContextMenuData };
        counter: number;
        initialized: boolean;

        /**
         * @method execute
         * @memberOf ContextMenu
         * @instance
         * @param {(string|ContextMenuOptions)} operation
         * @param {(string|ContextMenuOptions)} options
         * @return {ContextMenu}
         */
        execute(operation: string | JQueryContextMenu.ContextMenuOptions, options: string | JQueryContextMenu.ContextMenuOptions): ContextMenu;

        /**
         * if <menuitem> is not handled by the browser, or options was a bool true, initialize $.contextMenu for them.
         * @method html5
         * @memberOf ContextMenu
         * @param {ContextMenuOptions|boolean} options
         */
        html5(options: JQueryContextMenu.ContextMenuOptions | boolean): void;

        /**
         * Destroy the ContextMenu
         * @method destroy
         * @memberOf ContextMenu
         * @param {ContextMenuOptions} options
         */
        destroy(options: JQueryContextMenu.ContextMenuOptions): void;

        /**
         * Create a ContextMenu
         * @method create
         * @memberOf ContextMenu
         * @param {ContextMenuOptions} options
         */
        create(options: JQueryContextMenu.ContextMenuOptions): void;

        /**
         * Update the ContextMenu or all ContextMenu's
         * @method update
         * @memberOf ContextMenu
         * @param {ContextMenuOptions} options
         */
        update(options: JQueryContextMenu.ContextMenuOptions): void;

        /**
         * Build the options, by applying the Manager, defaults, user options and normalizing the context.
         * @method buildOptions
         * @memberOf ContextMenu
         * @param {ContextMenuOptions} userOptions
         * @return {ContextMenuOptions}
         */
        buildOptions(userOptions: JQueryContextMenu.ContextMenuOptions): any;

        /**
         * @method normalizeArguments
         * @memberOf ContextMenu
         * @param {string|Object} operation
         * @param {string|Object|ContextMenuOptions} options
         * @returns {{operation: string, options: ContextMenuOptions}}
         */
        normalizeArguments(operation: string | JQueryContextMenu.ContextMenuOptions, options?: JQueryContextMenu.ContextMenuOptions): { operation: string, options: JQueryContextMenu.ContextMenuOptions };

        /**
         * import values into `<input>` commands
         * @method setInputValues
         * @memberOf ContextMenu
         * @instance
         * @param {ContextMenuData} contextMenuData - {@link ContextMenuData} object
         * @param {Object} data - Values to set
         */
        setInputValues(contextMenuData: JQueryContextMenu.ContextMenuData, data?: { [key: string]: string | boolean }): void;

        /**
         * export values from `<input>` commands
         * @method getInputValues
         * @memberOf ContextMenu
         * @instance
         * @param {ContextMenuData} contextMenuData - {@link ContextMenuData} object
         * @param {Object} data - Values object
         * @return {Object} - Values of input elements
         */
        getInputValues(contextMenuData: JQueryContextMenu.ContextMenuData, data?: { [key: string]: string | boolean }): { [key: string]: string | boolean };

    }

    /**
     * Possible ContextMenuItem types
     * @type {Object}
     * @enum string
     */
    const enum ContextMenuItemTypes {
        /**
         * The command is a simple clickable item.
         */
        simple,
        /**
         * Makes the command an &lt;input&gt; of type text. The name followed by the &lt;input&gt; are encapsulated in a &lt;label&gt;.
         */
        text,
        /**
         * Makes the command a &lt;textarea&gt;. The name followed by the &lt;textarea&gt; are encapsulated in a &lt;label&gt;.
         */
        textarea,
        /**
         * Makes the command an &lt;input&gt; of type checkbox. The name followed by the &lt;input&gt; are encapsulated in a &lt;label&gt;.
         */
        checkbox,
        /**
         * Makes the command an &lt;input&gt; of type radio. The name followed by the &lt;input&gt; are encapsulated in a &lt;label&gt;.
         */
        radio,
        /**
         * Makes the command aa &lt;select&gt;. The name followed by the &lt;select&gt; are encapsulated in a &lt;label&gt;.
         */
        select,
        /**
         * Makes an non-command element. When you select `type: 'html'` add the html to the html property. So: `{ item: { type: 'html', html: '<span>html!</span>' } }`. You can also just use the item name with the `isHtmlName` property.
         */
        html,
        /**
         * Internal property, used internally when the type is set to a string.
         */
        separator,
        /**
         * Internal property for a {@link ContextMenuItem} that has an `items` property with other {@link ContextMenuItem} items.
         */
        submenu,
    }

    namespace JQueryContextMenu {

        enum ContextMenuOptionsTrigger {
            right = "right",
            left = "left",
            hover = "hover",
            touchstart = "touchstart",
            none = "none",
        }

        enum ContextMenuOptionsItemClickEvent {
            mouseup = "mouseup",
            click = "click"
        }

        interface ContextMenuZIndexFunction {
            ($trigger: JQuery, menuData: ContextMenuData): number;
        }

        /**
         * Runs in the scope of the `<li>` of the contextmenu.
         * @callback ContextMenuItemTypeCallback
         * @param {JQuery.Event} e - Event that trigged the menu.
         * @param {ContextMenuItem} item - Menu item
         * @param {ContextMenuData} currentMenuData - Data of the (sub)menu in which the item resides.
         * @param {ContextMenuData} rootMenuData - Data of the root menu in which the item resides. Might be the same as `currentMenuData` if triggered in the menu root.
         */
        interface ContextMenuItemTypeCallback {
            (e: JQuery.Event, item: ContextMenuItem, currentMenuData: ContextMenuData, rootMenuData: ContextMenuData): void
        }

        /**
         * @callback ContextMenuBuildCallback
         * @param {JQuery.Event} e - Event that trigged the menu.
         * @param {JQuery} $currentTrigger - Element that trigged the menu.
         * @return {Object.<string,ContextMenuItem>}
         */
        interface ContextMenuBuildCallback {
            (e: JQuery.Event, $currentTrigger: JQuery): { [key: string]: ContextMenuItem }
        }

        /**
         * The Callback is executed in the context of the triggering object.
         *
         * @callback ContextMenuItemCallback
         * @param {JQuery.Event} e - Event that trigged the menu.
         * @param {string} key - Key of the menu item.
         * @param {ContextMenuData} currentMenuData - Data of the (sub)menu in which the item resides.
         * @param {ContextMenuData} rootMenuData - Data of the root menu in which the item resides. Might be the same as `currentMenuData` if triggered in the menu root.
         * @return {boolean}
         */
        interface ContextMenuItemCallback {
            (e: JQuery.Event, key: string, currentMenuData: ContextMenuData, rootMenuData: ContextMenuData): any
        }

        /**
         * Specifies the icon class to set for the item.
         *
         * When using a string icons must be defined in CSS with selectors like `.context-menu-item.context-menu-icon-edit`, where edit is the icon class specified.
         *
         * When using a callback you can return a class string to use that as the class on the item. You can also modify the element by using the $itemElement argument.
         *
         * @example
         * var items = {
    firstCommand: {
        name: "Copy",
        icon: function(e, $itemElement, itemKey, item, currentMenuData, rootMenuData){
            // Set the content to the menu trigger selector and add an bootstrap icon to the item.
            $itemElement.html('<span class="glyphicon glyphicon-star" aria-hidden="true"></span> ' + currentMenuData.selector);

            // Add the context-menu-icon-updated class to the item
            return 'context-menu-icon-updated';
        }
    },
    secondCommand: {
        name: "Paste",
        icon: "paste" // Class context-menu-icon-paste is used on the menu item.
    }
}
         *
         * @callback ContextMenuIconCallback
         * @param {JQuery.Event} e
         * @param {JQuery} $item - Item element
         * @param {string} key - Item key
         * @param {ContextMenuItem} item
         * @param {ContextMenuData} currentMenuData
         * @param {ContextMenuData} rootMenuData
         */
        interface ContextMenuIconCallback {
            (e: JQuery.Event, $item: JQuery, key: string, item: ContextMenuItem, currentMenuData: ContextMenuData, rootMenuData: ContextMenuData): string | void
        }

        /**
         * @class ContextMenuItem
         * @instance
         * @interface
         * @classdesc The items map contains the commands to list in the menu. Each command has a unique key identifying an item object. The value may either be an item (properties explained below), or a string (which will insert a separator, disregarding the string's content). It is also possible to define a seperator the same as an item, and use the `type`:`cm_separator` to define it.

         ```javascript
         var items = {
  firstCommand: itemOptions,
  separator1: "-----",
  separator2: { "type": "cm_separator" },
  command2: itemOptions,
  submenu: {
    type: "submenu"
    submenuItem1: itemOptions,
    submenuItem2: itemOptions,
  }
}
         ```

         Since 2.3 it is also possible to use a promise as item, so you can build submenu's based on a snynchronous promis.

         Check out the [demo using a promise](demo/async-promise.md) for an example how to use this. The example uses jQuery deferred, but any promise should do. Promised can only be used in combination with the [build option](docs#build).

         *
         * @property {ContextMenuItemTypes|string} type - Specifies the type of the command. See {@link ContextMenuItemTypes}.
         * @property {string} name - Specify the human readable name of the command in the menu. This is used as the label for the option.
         * @property {boolean} isHtmlName - Should this item be called with .html() instead of .text(). Cannot be used with the accesskey option in the same item.
         * @property {Object.<string,ContextMenuItem>} items Object containing the menu items for creating a submenu.
         * @property {string} className - Specifies additional classNames to add to the menu item. Seperate multiple classes by using spaces.
         * @property {ContextMenuItemCallback} callback - Specifies the callback to execute if the item is clicked.
         * @property {ContextMenuIconCallback|string} icon - Specifies the icon class to set for the item. When using a string icons must be defined in CSS with selectors like `.context-menu-item.context-menu-icon-edit`, where edit is the icon class specified. When using a callback you can return a class string to use that as the class on the item. You can also modify the element by using the $itemElement argument.
         * @property {ContextMenuItemCallback|boolean} disabled - Specifies if the command is disabled (`true`) or enabled (`false`). May be a callback returning a `boolean`.
         * @property {ContextMenuItemCallback|boolean} visible - Specifies if the command is visible (`true`) or hidden (`false`). May be a callback returning a `boolean`.
         * @property {string} accesskey - Character(s) to be used as accesskey.

         Considering `a b c` $.contextMenu will first try to use »a« as the accesskey, if already taken, it'll fall through to `b`. Words are reduced to the first character, so `hello world` is treated as `h w`.

         Note: Accesskeys are treated unique throughout one menu. This means an item in a sub-menu can't occupy the same accesskey as an item in the main menu.
         *
         * @property {?JQuery} $input - The input element if it was build for this item.
         * @property {Object<string, Function>} events - Events to register on a {@link ContextMenuItem}. The contents of the options object are passed as jQuery `e.data`.
         * @property {string} value - The value of the `<input>` element.
         * @property {boolean|string} selected - The selected option of a `select` element and the checked property for `checkbox` and `radio` {@link ContextMenuItemTypes}.
         * @property {string} radio - Specifies the group of the `radio` element.
         * @property {string} options - Specifies the options of the `select` element.
         * @property {Number} height - The height in pixels `<textarea>` element. If not specified, the height is defined by CSS.
         */
        interface ContextMenuItem {
            type: ContextMenuItemTypes,
            name?: string,
            isHtmlName?: boolean,
            items?: { [key: string]: ContextMenuItem };
            className?: string,
            callback?: ContextMenuItemCallback,
            icon?: ContextMenuIconCallback | string,
            disabled?: ContextMenuItemCallback,
            visible?: ContextMenuItemCallback,
            accesskey?: string,

            $input?: JQuery,
            events?: { [key: string]: Function },
            value?: string,
            selected?: boolean | string,
            radio?: string,
            options?: string[],
            height?: number,
            width?: number,
        }

        /**
         * @class ContextMenuData
         * @augments ContextMenuOptions
         * @instance
         * @interface
         *
         * @property {JQuery} $menu - The menu element for this menu part. Eg. the root menu, or a single submenu.
         * @property {JQuery} $layer - The opened layer when the menu is opened.
         * @property {JQuery} $node - The menu node.
         * @property {JQuery} $trigger - The element that triggered opening the menu.
         * @property {JQuery} $selected - Reference to the `<li>` command element.
         * @property {JQuery} $input - Reference to the `<input>` or `<select>` of the command element.
         * @property {JQuery} $label - Reference to the `<input>` or `<select>` of the command element.
         * @property {string} ns - The namespace (including leading dot) all events for this contextMenu instance were registered under.
         * @property {ContextMenu} manager - The contextmenu manager instance.
         * @property {JQuery|jQuery|null} $selected - Currently selected menu item, or input inside menu item.
         * @property {?boolean} hasTypes - The menu has ContextMenuItem which are of a selectable type.
         * @property {?boolean} isInput - We are currently originating events from an input.
         * @property {Object<string, ContextMenuItem>} inputs - Inputs defined in the menu.
         * @property {Object<string, ContextMenuItemTypeCallback>} types - Custom ContextMenuItemTypes, key is the {@link ContextMenuItem} type property, value is a {@link ContextMenuItemTypeCallback} callback.
         *
         * @property {boolean} hovering Currently hovering, root menu only.
         */
        interface ContextMenuData extends ContextMenuOptions {
            $menu: JQuery,
            $layer: JQuery,
            $node: JQuery,
            $trigger: JQuery,
            $selected: JQuery,
            $input: JQuery,
            $label: JQuery,
            ns: string,
            manager: ContextMenu,
            hasTypes: boolean,
            isInput: boolean,
            hovering: boolean,
            inputs: { [key: string]: ContextMenuItem },
            types: { [key: string]: ContextMenuItemTypeCallback },
        }

        /**
         * @class ContextMenuOptions
         * @instance
         * @interface
         * @classdesc
         ## Register new contextMenu

         To register a new contextMenu:

         ```javascript
         $.contextMenu( contextMenuOptions );
         ```

         ## Update contextMenu state

         It is possible to refresh the state of the contextmenu [disabled](https://swisnl.github.io/jQuery-contextMenu/docs/items.html#disabled), [visibility](https://swisnl.github.io/jQuery-contextMenu/docs/items.html#visible), [icons](https://swisnl.github.io/jQuery-contextMenu/docs/items.html#icon) and [input values](https://swisnl.github.io/jQuery-contextMenu/docs/items.html#type) through the `update` command. This will reevaluate any custom callbacks.

         ```javascript
         $('.context-menu-one').contextMenu('update'); // update single menu
         $.contextMenu('update') // update all open menus
         ```

         * @property {null|string} selector - Selector on which the contextMenu triggers.
         * @property {Object.<string, ContextMenuItem>} items - Object with items to be listed in contextMenu. See {@link ContextMenuItem} for a full documentation on how to build your menu items.
         * @property {JQuery.Selector|HTMLElement} [appendTo=document.body] - Specifies the selector `string` or `DOMElement` the generated menu is to be appended to.
         * @property {('right'|'left'|'hover'|'touchstart'|'none')} trigger=left - Method to trigger context menu ["right", "left", "hover", "touchstart", "none"].
         * @property {?string} itemClickEvent - Allows the selection of the click event instead of the mouseup event to handle the user mouse interaction with the contexMenu. The default event is `mouseup`. Set the option to `"click"` to change to the `click` event.

         This option is global: the first contexMenu registered sets it. To change it afterwards all the contextMenu have to be unregistered with `$.contextMenu( 'destroy' );` before the change has effect again.

         * @property {boolean} hideOnSecondTrigger=false - Flag denoting if a second trigger should close the menu, as long as the trigger happened on one of the trigger-element's child nodes. This overrides the reposition option.
         * @property {boolean} selectableSubMenu=false - Ability to select ContextMenuItem containing a submenu.
         * @property {boolean} reposition=true - flag denoting if a second trigger should simply move (`true`) or rebuild (`false`) an open menu as long as the trigger happened on one of the trigger-element's child nodes
         * @property {number} delay=200 - ms to wait before showing a hover-triggered context menu.
         * @property {boolean} autoHide=true - Hide menu when mouse leaves trigger / menu elements.
         * @property {number|Function} zIndex=1 - offset to add to zIndex
         * @property {string} className - Class to be appended to the root menu.
         * @property {Object} classNames - Default classname configuration to be able avoid conflicts in frameworks.
         * @property {string} classNames.hover=context-menu-hover
         * @property {string} classNames.disabled=context-menu-disabled
         * @property {string} classNames.visible=context-menu-visible
         * @property {string} classNames.notSelectable=context-menu-not-selectable
         * @property {string} classNames.icon=context-menu-icon
         * @property {string} classNames.iconEdit=context-menu-icon-edit
         * @property {string} classNames.iconCut=context-menu-icon-cut
         * @property {string} classNames.iconCopy=context-menu-icon-copy
         * @property {string} classNames.iconPaste=context-menu-icon-paste
         * @property {string} classNames.iconDelete=context-menu-icon-delete
         * @property {string} classNames.iconAdd=context-menu-icon-add
         * @property {string} classNames.iconQuit=context-menu-icon-quit
         * @property {string} classNames.iconLoadingClass=context-menu-icon-loading
         * @property {Object} animation - Animation settings
         * @property {number} animation.duration=50
         * @property {string} animation.show='slideDown'
         * @property {string} animation.hide='slideUp'
         * @property {Object} events - Event callbacks. This is the trigger element, first argument is the event, and the second argumant {@link ContextMenuData}.
         * @property {Function} events.show - Called when contextmenu is shown.
         * @property {Function} events.hide - Called when contextmenu is hidden.
         * @property {Function} events.activated - Called when contextmenu is activated.
         * @property {ContextMenuItemCallback} callback - Global callback called then a {@link ContextMenuItem} is clicked.
         * @property {ContextMenuBuildCallback} build=false
         * @property {(position)} position - Callback to override the position of the context menu. The function is executed in the context of the trigger object.

         The first argument is a jQuery.Event. The second argument is the {@link ContextMenuData} object, which has a `$menu` property with the menu that needs to be positioned. The third and fourth arguments are `x` and `y` coordinates provided by the show event.

         The `x` and `y` may either be integers denoting the offset from the top left corner, undefined, or the string "maintain". If the string "maintain" is provided, the current position of the `$menu` must be used. If the coordinates are `undefined`, appropriate coordinates must be determined. An example of how this can be achieved is provided with {@link determinePosition}.

         * @property {(determinePosition)} determinePosition
         * @property {(positionSubmenu)} positionSubmenu - Callback tha positions a submenu
         * @property {boolean} _hasContext - Set to true if the call was done from an element.
         */
        interface ContextMenuOptions {
            selector: string;
            items?: { [key: string]: ContextMenuItem };
            appendTo?: JQuery.Selector | HTMLElement;
            trigger?: ContextMenuOptionsTrigger;
            itemClickEvent?: ContextMenuOptionsItemClickEvent;
            hideOnSecondTrigger?: boolean,
            selectableSubMenu?: boolean,
            reposition?: boolean;
            delay?: number;
            autoHide?: boolean;
            zIndex?: number | ContextMenuZIndexFunction;
            className?: string;
            classNames: {
                hover: string,
                disabled: string,
                visible: string,
                notSelectable: string,
                icon: string,
                iconEdit: string,
                iconCut: string,
                iconCopy: string,
                iconPaste: string,
                iconDelete: string,
                iconAdd: string,
                iconQuit: string,
                iconLoadingClass: string,
            },
            animation?: {
                duration?: number;
                show?: string;
                hide?: string;
            };
            events?: {
                show?: (e: JQuery.Event, menuData: ContextMenuData) => boolean;
                hide?: (e: JQuery.Event, menuData: ContextMenuData) => boolean;
                activated?: (e: JQuery.Event, menuData: ContextMenuData) => void;
            };
            callback?: ContextMenuItemCallback
            build?: ContextMenuBuildCallback;
            position?: (e: JQuery.Event, menuData: ContextMenuData, x: number, y: number) => void;
            determinePosition?: (menu: JQuery) => void;
            positionSubmenu?: (e: JQuery.Event, menu: JQuery) => void;
            _hasContext?: boolean
        }

        enum ContextMenuOperationsEnum {
            create = "create",
            hide = "hide",
            update = "update",
            destroy = "destroy",
            html5 = "html5"
        }



        /**
         * @constructs ContextMenuEventHandler
         * @constructor
         * @property {?JQuery} $currentTrigger
         * @property {Object} hoveract
         */
        class ContextMenuEventHandler {

            $currentTrigger?: JQuery;
            hoveract?: { pageX: number, pageY: number, data: any, timer: Number } | {};

            constructor();

            /**
             * Helper to abort an event
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            abortevent(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            contextmenu(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            click(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            mousedown(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            mouseup(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            mouseenter(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            mousemove(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            mouseleave(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            layerClick(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             * @param {ContextMenuItem} currentMenuData
             */
            keyStop(e: JQuery.Event, currentMenuData: ContextMenuItem): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            key(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            prevItem(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            nextItem(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            focusInput(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            blurInput(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            menuMouseenter(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            menuMouseleave(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            itemMouseenter(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            itemMouseleave(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            itemClick(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            inputClick(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             * @param {Object} data
             */
            hideMenu(e: JQuery.Event, data: any): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            focusItem(e: JQuery.Event): void;

            /**
             * @method
             * @memberOf ContextMenuEventHandler
             * @instance
             * @param {JQuery.Event} e
             */
            blurItem(e: JQuery.Event): void;

        }

        /**
         * @class ContextMenuHelper
         * @classdesc Few helper static functions
         */
        class ContextMenuHelper {
            /**
             * Calculates zIndex of an element
             * @memberOf ContextMenuHelper
             * @method zindex
             * @static
             * @param {JQuery} $t - Element to calculate z-index of.
             * @return {number} - Elements zIndex
             */
            static zindex($t: JQuery): number;

            /**
             * Split accesskey according to http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#assigned-access-key
             * @memberOf ContextMenuHelper
             * @method splitAccesskey
             * @static
             * @param {string} val - Accesskey value
             * @return {Array} - Seperate keys to handle as accesskey
             */
            static splitAccesskey(val: string): string[];
        }

        /**
         * @class ContextMenuHtml5Builder
         * @classdesc considering the following HTML `$.contextMenu.fromMenu($('#html5menu'))` will return a proper items object.
         * ```
         * <menu id="html5menu" type="context" style="display:none">
         * <command label="rotate" onclick="alert('rotate')">
         * <command label="resize" onclick="alert('resize')">
         * <menu label="share">
         * <command label="twitter" onclick="alert('twitter')">
         * <hr>
         * <command label="facebook" onclick="alert('facebook')">
         * </menu>
         * </menu>
         * ```
         * `$.contextMenu.fromMenu()` will properly import (and thus handle) the following elements. Everything else is imported as `{type: "html"}`
         * ```
         * <menu>
         * <hr>
         * <a>
         * <command type="command|radio|checkbox"> (W3C Specification)
         * <menuitem type="command|radio|checkbox"> (Firefox)
         * <input type="text|radio|checkbox">
         * <select>
         * <textarea>
         * <label for="someId">
         * <label> the text <input|textarea|select>
         * ```
         * The `<menu>` must be hidden but not removed, as all command events (clicks) are passed-thru to the original command element!
         * Note: While the specs note `<option>`s to be renderd as regular commands, `$.contextMenu` will render an actual `<select>`.
         * ## HTML5 `<menu>` shiv/polyfill
         * Engaging the HTML5 polyfill (ignoring `$.contextMenu` if context menus are available natively):
         * ```
         * $(function(){
 * $.contextMenu("html5");
 * });
         * ```
         * Engaging the HTML5 polyfill (ignoring browser native implementation):
         * ```
         * $(function(){
 * $.contextMenu("html5", true);
 * });
         * ```
         */
        class ContextMenuHtml5Builder {
            /**
             * Get the input label for the given node.
             * @method inputLabel
             * @memberOf ContextMenuHtml5Builder
             * @instance
             * @param {HTMLElement} node - Html element
             * @returns {string|JQuery} - Input label element
             */
            inputLabel(node: HTMLElement): string | JQuery;

            /**
             * Helper function to build ContextMenuItems from an html5 menu element.
             * @method fromMenu
             * @memberOf ContextMenuHtml5Builder
             * @instance
             * @param {JQuery|string} element - Menu element or selector to generate the menu from.
             * @returns {Object.<string, ContextMenuItem>} - Collection of {@link ContextMenuItem}
             */
            fromMenu(element: JQuery | string): {
                [key: string]: ContextMenuItem;
            };

            /**
             * Helper function for building a menu from a HTML menu element.
             * @method build
             * @memberOf ContextMenuHtml5Builder
             * @instance
             * @param {Object.<string, ContextMenuItem>} items - {@link ContextMenuItem} object to build.
             * @param {JQuery} $children - Collection of elements inside the `<menu>` element
             * @param {number?} counter - Counter to generate {@link ContextMenuItem} key names.
             * @returns {number} - Counter to generate {@link ContextMenuItem} key names.
             */
            build(items: {
                [key: string]: ContextMenuItem;
            }, $children: JQuery, counter?: number): number;

        }


        /**
         * @constructor
         * @constructs ContextMenuOperations
         */
        class ContextMenuOperations {
            constructor();

            /**
             * Show the menu.
             * @method
             * @memberOf ContextMenuOperations
             * @instance
             * @param {JQuery.Event} e
             * @param {ContextMenuData} menuData
             * @param {number} x
             * @param {number} y
             */
            show(e: JQuery.Event, menuData: ContextMenuData, x: number, y: number): void;

            /**
             * Hide the menu.
             * @method
             * @memberOf ContextMenuOperations
             * @instance
             * @param {JQuery.Event} e
             * @param {ContextMenuData} menuData
             * @param {boolean} force
             */
            hide(e: JQuery.Event, menuData?: ContextMenuData, force?: boolean): void;

            /**
             * Create a menu based on the options. Also created submenus.
             * @method
             * @memberOf ContextMenuOperations
             * @instance
             * @param {JQuery.Event} e
             * @param {ContextMenuData} currentMenuData
             * @param {ContextMenuData?} rootMenuData
             */
            create(e: JQuery.Event, currentMenuData: ContextMenuData, rootMenuData?: ContextMenuData): void;

            /**
             * Resize the menu to its content.
             * @method
             * @memberOf ContextMenuOperations
             * @instance
             * @param {ContextMenuEvent} e
             * @param {JQuery} $menu
             * @param {boolean?} nested
             */
            resize(e: JQuery.Event, $menu: JQuery, nested?: boolean): void;

            /**
             * Update the contextmenu, re-evaluates the whole menu (including disabled/visible callbacks)
             * @method
             * @memberOf ContextMenuOperations
             * @instance
             * @param {JQuery.Event} e
             * @param {ContextMenuData?} currentMenuData
             * @param {ContextMenuData?} rootMenuData
             */
            update(e: JQuery.Event, currentMenuData?: ContextMenuData, rootMenuData?: ContextMenuData): void;

            /**
             * Create the overlay layer so we can capture the click outside the menu and close it.
             * @method
             * @memberOf ContextMenuOperations
             * @instance
             * @param {JQuery.Event} e
             * @param {ContextMenuData} menuData
             * @param {number} zIndex
             * @returns {JQuery}
             */
            layer(e: JQuery.Event, menuData: ContextMenuData, zIndex: number): JQuery;

            /**
             * Process submenu promise.
             * @method
             * @memberOf ContextMenuOperations
             * @instance
             * @param {JQuery.Event} e
             * @param {ContextMenuData} currentMenuData
             * @param {ContextMenuData} rootMenuData
             * @param {Promise} promise
             */
            processPromises(e: JQuery.Event, currentMenuData: ContextMenuData, rootMenuData: ContextMenuData, promise: PromiseLike<Function>): void;

            /**
             * Operation that will run after contextMenu showed on screen.
             * @method
             * @memberOf ContextMenuOperations
             * @instance
             * @param {JQuery.Event} e
             * @param {ContextMenuData} menuData
             */
            activated(e: JQuery.Event, menuData: ContextMenuData): void;

        }

    }


}