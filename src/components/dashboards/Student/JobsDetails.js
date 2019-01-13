import React from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'

const JobsDetails =(props)=>{
    // const id=props.match.params.id;
    // console.log("JOBS DETAILS",props)
    const { companyJob } = props;
    console.log("JOBS DETAILS 1111",companyJob)
    if(companyJob){
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div>
                        <div className="card-content">
                        <span className="card-title">Industry:{companyJob.industry}</span>
                       <p>Job Title:{companyJob.jobTitle}</p>
                       <p>Number:{companyJob.number}</p>
                       <p>{companyJob.message}</p>
                        </div>
                        <div className="card-action gret lighten-4 black-text">
                        <p>Location:{companyJob.location}</p>
                        <button className="btn waves-effect waves-light ">
                            Submit
                            <i className="material-icons right">send</i>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else{
        return(
            <div className="container center">
            
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div class="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    // console.log("Project Deatails",state);
    const id=ownProps.match.params.id;
    const companyJobs=state.firestore.data.companyJobs;
    const companyJob=companyJobs ? companyJobs[id] :null
    return{
        companyJob:companyJob
    }
}

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "companyJobs"}
                ])
                )(JobsDetails)