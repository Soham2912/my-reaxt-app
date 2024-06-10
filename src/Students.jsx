
import propTypes from 'prop-types';
function Students(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p> Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>


    );
}

Students.propTypes={
    age:propTypes.number,
    name:propTypes.string,
    isStudent:propTypes.bool,
}

Students.defaultProps={
    name:"guest",
    isStudent:false,
    age:0,
}
export default Students;


