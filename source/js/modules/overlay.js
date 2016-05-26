import * as core from "../core";
import * as sqs from "../sqs";
// Here's jQuery in case you need it. If you're just doing DOM manipulation, you
// probably won't need it.
// import $ from "js/lib/jquery/dist/jquery";


let $_jsElements = null;


/**
 *
 * @public
 * @module overlay
 * @description A nice description of this module.
 *
 */
const overlay = {
    /**
     *
     * @public
     * @method init
     * @memberof overlay
     * @description Method runs once when window loads.
     *
     */
    init () {
        if ( this.isActive() ) {
            // Use this method to separate your
            console.log( "overlay module initialized" );
            initElement();
        }

    },


    /**
     *
     * @public
     * @method isActive
     * @memberof overlay
     * @description Method informs of active status.
     * @returns {boolean}
     *
     */
    isActive () {
        return (this.getElements() > 0);
    },


    /**
     *
     * @public
     * @method unload
     * @memberof overlay
     * @description Method performs unloading actions for this module.
     *
     */
    unload () {
        // Typically unloading and tearing down isn't required unless you're
        // using a completely AJAX Squarespace website that functions like
        // a single page application.
        this.teardown();
    },


    /**
     *
     * @public
     * @method teardown
     * @memberof overlay
     * @description Method performs cleanup after this module. Removes events, null vars etc...
     *
     */
    teardown () {
        $_jsElements = null;
    },


    /**
     *
     * @public
     * @method getElements
     * @memberof overlay
     * @description Method queries DOM for this modules node.
     * @returns {number}
     *
     */
    getElements () {
        $_jsElements = core.dom.body.find( ".js-overlay" );

        return ( $_jsElements.length );
    }
};


/**
 *
 * @private
 * @method execVideo
 * @memberof overlay
 * @description Handles close button.
 * @param {Object} $el is the overlay node.
 *
 */
const handleClose = function ( $el ) {
    const overlayClose = $el.find( ".custom-overlay-close" );

    overlayClose[ 0 ].addEventListener( "click", () => {
        $el.addClass( "is-hidden" );
        // setTimeout( () => {
        //     $el.remove();
        // }, 10000);
    });

};

/**
 *
 * @private
 * @method execVideo
 * @memberof overlay
 * @description Handles parsing overlay content and attaching to new target node.
 * @param {Object} $el the overlay node.
 *
 */
const execElement = function ( $el ) {
    const overlayInner = $el.find( ".custom-overlay-inner" );


    const overlayData = $el.data();
    const url = overlayData.url;

    let mainContent = null;

    core.api.fetch( url, { format: "json" } )
        .then( ( response ) => {
            return response.json();
        }).then( ( json ) => {
            mainContent = json.mainContent;
        }).then( () => {
            overlayInner.append( mainContent );
            sqs.util.sqsLifecycle.init();
            handleClose( $el );
            $el.addClass( "is-loaded" ).removeClass( "is-hidden" );
        });
};


/**
 *
 * @private
 * @method initElements
 * @memberof overlay
 * @description This module would do something with your elements.
 *
 */
const initElement = function ( ) {
    const $notLoaded = $_jsElements.not( ".is-initialized" );
    let $element = null;
    let i = $notLoaded.length;

    for ( i; i--; ) {
        $element = $_jsElements.eq( i );

        $element.addClass( "is-initialized" );

        execElement( $element );
    }
};



/******************************************************************************
 * Export
*******************************************************************************/
export default overlay;