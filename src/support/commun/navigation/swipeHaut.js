import Gestures from '../../../helpers/Gestures'

/**
 * Swipe vers le haut
 */
export default () => {
    browser.pause(2500)
    Gestures.swipeUp(0.75)
}