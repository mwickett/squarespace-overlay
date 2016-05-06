import $ from "js/lib/jquery/dist/jquery";


/**
 *
 * @public
 * @module dom
 * @description Holds high-level cached Nodes.
 *
 */
const dom = {
    /**
     *
     * @public
     * @member doc
     * @memberof dom
     * @description The cached document node.
     *
     */
    doc: $( document ),


    /**
     *
     * @public
     * @member win
     * @memberof dom
     * @description The cached window node.
     *
     */
    win: $( window ),


    /**
     *
     * @public
     * @member html
     * @memberof dom
     * @description The cached documentElement node.
     *
     */
    html: $( document.documentElement ),


    /**
     *
     * @public
     * @member body
     * @memberof dom
     * @description The cached body node.
     *
     */
    body: $( document.body )
};



/******************************************************************************
 * Export
*******************************************************************************/
export default dom;