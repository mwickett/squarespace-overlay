import $ from "js/lib/jquery/dist/jquery";
import * as core from "./core";
import example from "./modules/example";


/**
 *
 * @public
 * @class App
 * @classdesc Load the App application Class to handle everything.
 *
 */
class App {
    constructor () {
        this.$ = $;
        this.core = core;
        this.example = example;

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
        this.example.init( this );
    }


}



/******************************************************************************
 * Bootstrap
*******************************************************************************/
window.onload = function () {
    window.app = new App();
};