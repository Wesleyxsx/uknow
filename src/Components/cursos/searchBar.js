import {InputGroup, FormControl, Button } from 'react-bootstrap'

const searchBarStyles = {
    width: "80%",
    marginTop: "50px"
}

const SearchBar = () => (
    <form action="/" method="get" >
        <div class="container h-100" style={searchBarStyles}>
        <div class="row h-100 justify-content-center align-items-center"></div>
        <InputGroup className="col-6">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
    </form>
);

export default SearchBar;