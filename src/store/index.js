import rootReducer from './reducers/rootReducer'
import { createStore,applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"
import {getFirebase,reactReduxFirebase} from 'react-redux-firebase'
import {getFirestore,reduxFirestore} from 'redux-firestore'
import FbConfig from '../config/FbConfig'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({
        getFirebase,
        getFirestore
    })),
    reduxFirestore(FbConfig),
    reactReduxFirebase(FbConfig, {
        // useFirestoreForProfile use to user profile
                    useFirestoreForProfile: true,
        // kon sy collection ko use krskty hai "student" ko
                    userProfile:'student',
                    attachAuthIsReady: true}),
    )
)

export default store;