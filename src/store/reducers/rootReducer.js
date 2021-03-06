import { combineReducers } from 'redux'
import  authReducesStd     from './authReducerStd'
import  authReducesCp      from './authReducerCp'
import  authReducesAd      from './authReducerAd'
import {firebaseReducer}   from 'react-redux-firebase'
import {firestoreReducer}  from 'redux-firestore'

import createResumeReducerStd from './CreateResumeReducerStd'
import CreateJobsReducerCp  from './CreateJobsReducerCp'

import UpdateDeleteReducerCp from './Admin/UpdateDeleteReducerCp'
import UpdateDeleteReducerStd from './Admin/UpdateDeletereducerStd'

const rootReducers  = combineReducers({

    updateDeleteJob :      UpdateDeleteReducerCp,
    updateDeleteResume:   UpdateDeleteReducerStd,
    
    createResumeStd: createResumeReducerStd,
    createJobsCp:    CreateJobsReducerCp,

    authStd:      authReducesStd,
    authCp:       authReducesCp,
    authAd:       authReducesAd,

    firebase:     firebaseReducer,
    firestore:    firestoreReducer
});

export default rootReducers;

