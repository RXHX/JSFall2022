
const DisplayEmployeeHeader = (props) => {

   return(
    <thead>
  <tr>
    <th scope="col">{props.name}</th>
    <th scope="col">{props.email}</th>
    <th scope="col">{props.title}</th>
  </tr>
</thead>
   )


}

const DisplayEmployeeFooter = (props) => {

    return(
        <tfoot>
        <tr>
          <td colSpan="3">{props.foot}</td>
        </tr>
      </tfoot>
    )
 
 
 }

 
const DisplayEmployeeBody = (props) => {

    return(
       
        <tr>
          <th scope="row">{props.name}</th>
          <td>{props.email}</td>
          <td>{props.jobRole}</td>
          </tr>
     
    )
 
 
 }


const DisplayEmployeeCaption  = (props) => {

    return(
        <caption>{props.head}</caption>
    )
} 



class Employee extends React.Component {
  
    // to change UI during execution async.
    state =   
    {
        employee : [
        {
              name: "Nick Pettit",
              email:"nick@example.com",
              jobRole : "Web Designer",
              id : 1                
        },
        {
            name: "Andrew Chalkley",
              email:"andrew@example.com",
              jobRole : "Front-End Developer",
            id : 2   
        },{
            name: "Dave McFarland",
            email:"dave@example.com",
            jobRole : "Front-End Developer",
            id:3   
        },{
            name: "Guil Hernandez",
              email:"guil@example.com",
              jobRole : "Web Designer",
            id:4
        }
    ]
    }
 

  
    render()
    {
        return(
            <div>
            <table>
          <DisplayEmployeeCaption head = "Employee Information"/> 
          <DisplayEmployeeHeader name="Name" email="E-mail" title="Job role"/>
          <DisplayEmployeeFooter foot = "Data is updated every 15 minutes."/>
          <tbody>
           { 
           
           this.state.employee.map((employees) =>  
               <DisplayEmployeeBody 
                  name = {employees.name}
                  email = {employees.email}
                  jobRole = {employees.jobRole}
                  key = {employees.id.toString()}
                           
               />
           )}
              </tbody>  
              </table>
            </div>
        )

    }
}
ReactDOM.render(<Employee/>,document.getElementById('root'));