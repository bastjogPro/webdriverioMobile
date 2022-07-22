import Gestures from '../../../helpers/Gestures'

/**
 * Swipe vers le haut 
 * @param  {String} fois - nombre de swipe a effectuer
 */
export default (fois) => {

    browser.pause(2500)
    
    for(var i=0;i<fois;i++){
        Gestures.swipeUp(0.75)
    }
}