import Gestures from '../../../helpers/Gestures'

/**
 * Swipe vers le haut
 */
export default () => {
    browser.pause(2500)
    Gestures.swipeDown(0.75)
}