const Course = (courses) => {
        
    const Header = (courses) => {  
      return(
        courses.course.map(course =>
        <div>
       <h3><p  key={course.id}>
         {course.name}
        </p></h3>
        <Part course={course.name} />
      </div>
      )
    )
    }
      
    const Part = (props) => {
      const siirto = props
      const kurssit = courses.course.filter(kurssi =>
            kurssi.name === props.course)
        return(
          <div>
          <ul>         
          {kurssit.map((item)=>{        
            return item.parts.map((items)=>{     
              return (      
                <p key={items.id}>
                {items.name} {items.exercises} 
                </p>
              )   
            })
          })}        
        </ul>  
        <Total course={siirto}/>
        </div>
        )  
    }
  
    const Total = (props) => {
      const nimi=props.course
      const kurssit = courses.course.filter(kurssi =>
        kurssi.name === nimi.course)
        const all=[]
        kurssit.map((item)=>{
          item.parts.map((items)=>{
            
            all.push(items.exercises)
    })
    
  })
      return(
        <div>
          <ul>
          <h4><p>total of {all.reduce((sum, ex) => sum + ex,0)} exercises
          </p></h4>
          </ul>
        </div>
      )
    }
    return(
      <div>
        <Header course={courses.course} />
      </div>
    )
  }

  export default Course
  