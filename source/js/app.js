/**
 *
 * Require for Webpack File Loader.
 * File Loader is a way to compile your Sass with Webpack.
 * This is simply a link to your Sass entry point.
 * This is removed from your final JavaScript build.
 *
 */
require( "../sass/app.scss" );



import * as core from "./core";
import * as sqs from "./sqs";
import overlay from "./modules/overlay";


/**
 *
 * @public
 * @class App
 * @classdesc Load the App application Class to handle everything.
 *
 */
class App {
    constructor () {
        this.core = core;
        this.sqs = sqs;
        this.overlay = overlay;

        this.initModules();
    }


    /**
     *
     * @public
     * @instance
     * @method initModules
     * @memberof App
     * @description Initialize application modules.
     *
     */
    initModules () {
        this.overlay.init( this );
    }
}



/******************************************************************************
 * Expose
*******************************************************************************/
window.app = new App();


/******************************************************************************
 * Export
*******************************************************************************/
export default window.app;