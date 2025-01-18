const AllCountries = (props) => {
    return (
      props.names.map(name => (
          <div key={name}>
            {name}
          </div>
          )
        )
    )
  }
  export default AllCountries